import { Injectable } from "@angular/core";

/*
*
*
* The @Injectable decorator with the providedIn: 'root' configuration is used in Angular to
* create a singleton service that is automatically provided and shared at the root level
* of the application. Let's break down what this code is doing and why it's used:

1. Singleton Service:
When you decorate a service with @Injectable and configure it with providedIn: 'root',
* you are instructing Angular to create a single instance (singleton) of that service for
* the entire application. This means that there will be only one instance of the service
* shared among all the components and other parts of the application that inject it.

2. Automatic Dependency Injection:
By specifying providedIn: 'root', you don't need to manually provide the service in any module.
* Angular takes care of the service's lifecycle and ensures it's available throughout the entire application.

3. Why Use providedIn: 'root'?

    Singleton Pattern: Using providedIn: 'root' is the recommended way to create singleton services in Angular.
    * It ensures that there's only one instance of the service in your application,
    * promoting efficient resource usage and consistent state management.

    Lazy Loading Support: When your application uses lazy loading to load feature modules,
    *  services provided at the root level can still be shared across all parts of the application,
    *  making it a practical choice for most services.

    Simplified Configuration: It reduces the need for manual configuration in various modules.
    *  You don't have to add the service to the providers array of any module, which can simplify your codebase.

    Predictable Behavior: Services provided at the root level are available
    * from the application's root injector, and this behavior is well-defined
    * and consistent across the entire application.
*
* */

@Injectable({
    providedIn: 'root'
})

export class GetTaskByIdService {

    constructor() {
    }

    fetchTaskById(id: string) {
        return localStorage.getItem("all-tasks");
    }

}