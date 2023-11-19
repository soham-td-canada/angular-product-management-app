import {Injectable} from '@angular/core';
import {of, throwError} from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class GetAllTasks {

    constructor() {

    }

    fetchAllTasks() {
        const tasks = localStorage.getItem("all-tasks");

        if(tasks) {
            return of(tasks);
        } else {
            return throwError('error')
        }
    }
}