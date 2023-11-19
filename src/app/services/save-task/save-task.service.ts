import { Injectable } from "@angular/core";
import { GetAllTasks } from "../get-tasks/get-tasks.service";

@Injectable({
    providedIn: 'root'
})

export class SaveTaskService {
    constructor(private getAllTasksService: GetAllTasks) {
    }

    saveTaskById(task: any) {
        const tasks = getAllTasksService.fetchAllTasks();

        tasks.push(task);

        localStorage.setItem("all-tasks", tasks);
    }
}