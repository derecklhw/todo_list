import { defineStore } from "pinia";
import { ref } from "vue";
import { uuidv7 } from "uuidv7"; 

import type { Task } from "../types";

export const useTasksStore = defineStore('tasks', () => {
    // properties
    const tasks = ref<Task[]>([]);

    // actions
    function addTask(title: string) {
        const task: Task = {
            id: uuidv7(),
            title: title,
            description: "What needs to be done?",
            completed: false,
        };
        tasks.value.push(task);
    }

    function deleteTask(id: string) {
        tasks.value = tasks.value.filter((task) => task.id !== id);
    }

    function toggleTaskStatus(id: string) {
        const task = tasks.value.find((task) => task.id === id);
        if (task) {
            task.completed = !task.completed;
        }
    }

    function updateTaskDetails({ id, title, description }: { id: string; title: string; description: string }) {
        console.log(title, description)
        const task = tasks.value.find((task) => task.id === id);
        if (task) {
            task.title = title;
            task.description = description;
        }
    }

    return { tasks, addTask, deleteTask, toggleTaskStatus, updateTaskDetails };

});