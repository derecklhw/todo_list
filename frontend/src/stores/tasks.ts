import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { uuidv7 } from "uuidv7"; 

import type { Task } from "../types";

export const useTasksStore = defineStore('tasks', () => {
    // properties
    const tasks = ref<Task[]>([]);

    // actions
    function fetchTasks(){
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
          tasks.value = JSON.parse(storedTasks);
        }
    }

    function addTask(title: string) {
        const task: Task = {
            id: uuidv7(),
            title: title,
            description: "What needs to be done?",
            completed: false,
        };
        tasks.value.push(task);
        saveTasksToLocal();
    }

    function deleteTask(id: string) {
        tasks.value = tasks.value.filter((task) => task.id !== id);
        saveTasksToLocal();
    }

    function toggleTaskStatus(id: string) {
        const task = tasks.value.find((task) => task.id === id);
        if (task) {
            task.completed = !task.completed;
            saveTasksToLocal();
        }
    }

    function updateTaskDetails({ id, title, description }: { id: string; title: string; description: string }) {
        console.log(title, description)
        const task = tasks.value.find((task) => task.id === id);
        if (task) {
            task.title = title;
            task.description = description;
            saveTasksToLocal();
        }
    }

    // helpers

    function saveTasksToLocal() {
        localStorage.setItem('tasks', JSON.stringify(tasks.value));
      }
    
    // Watch for changes in tasks and save to local storage
    watch(tasks, (newTasks) => {
        saveTasksToLocal();
    }, { deep: true });
    

    return { tasks, addTask, deleteTask, toggleTaskStatus, updateTaskDetails, fetchTasks };

});