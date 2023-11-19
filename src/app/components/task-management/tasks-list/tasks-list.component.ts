import {Component, OnInit} from "@angular/core";
import { GetAllTasks } from "../../../services/get-tasks/get-tasks.service";

interface Task {
    description: string,
    id: string,
    heading: string,
    createdAt: string
}


@Component({
    selector: 'tasks-list',
    templateUrl: './tasks-list.component.html'
})

export class TasksList implements OnInit {
    tasks: Task[] = [
        {
            "createdAt": "2023-10-25T22:24:10.638Z",
            "heading": "Roxanne Bernhard",
            "description": "Senior",
            "id": "1"
        },
        {
            "createdAt": "2023-10-25T13:53:05.189Z",
            "heading": "Guillermo Dare",
            "description": "Regional",
            "id": "2"
        },
        {
            "createdAt": "2023-10-25T20:29:38.365Z",
            "heading": "Ian Gleichner",
            "description": "National",
            "id": "3"
        },
        {
            "createdAt": "2023-10-25T07:26:53.736Z",
            "heading": "Eula Swift III",
            "description": "Forward",
            "id": "4"
        },
        {
            "createdAt": "2023-10-25T00:51:08.912Z",
            "heading": "Dr. Alton Mante",
            "description": "National",
            "id": "5"
        }
    ];

    constructor(private getAllTasks: GetAllTasks) {}

    ngOnInit() {
        this.getAllTasks.fetchAllTasks().subscribe((res: any) => {
            console.log(res);
            this.tasks = res;
        }, (err) => {
            // console.log(this.tasks)
            console.error(err);
        })
    }

}