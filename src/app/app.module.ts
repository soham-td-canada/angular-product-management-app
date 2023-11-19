import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TaskManagementHome } from "./components/task-management/home/home.component";
import {FormsModule} from "@angular/forms";
import { GetProductByIdService } from "./services/get-product/get-product.service";
import { SaveProductByIdService } from "./services/save-product/save-product.service";
import {TasksList} from "./components/task-management/tasks-list/tasks-list.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailsComponent,
    ProductListComponent,
    TaskManagementHome,
      TasksList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
    HttpClientModule,
  ],
  providers: [GetProductByIdService,SaveProductByIdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
