import { TaskManager } from "./services/TaskManager";

const taskManager = new TaskManager();

// Adding tasks
const task1 = taskManager.addTask("Learn TypeScript", "Understand TypeScript basics and usage.");
const task2 = taskManager.addTask("Build a Task Manager", "Develop a simple task manager in TypeScript.");

// Display tasks
console.log("All Tasks:", taskManager.getTasks());

// Mark a task as complete
const taskIdToComplete = 1;
if (taskManager.markTaskAsComplete(taskIdToComplete)) {
    console.log(`Task ${taskIdToComplete} marked as complete.`);
} else {
    console.log(`Task ${taskIdToComplete} not found.`);
}

// Display updated tasks
console.log("Updated Tasks:", taskManager.getTasks());
