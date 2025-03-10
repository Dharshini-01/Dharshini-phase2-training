import { Task } from "../models/Task";

export class TaskManager {
    private tasks: Task[] = [];
    private nextId: number = 1;

    addTask(title: string, description: string): Task {
        const task = new Task(this.nextId++, title, description);
        this.tasks.push(task);
        return task;
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    markTaskAsComplete(id: number): boolean {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.markAsComplete();
            return true;
        }
        return false;
    }
}
