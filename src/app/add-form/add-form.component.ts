import { Component } from '@angular/core';
import {Todo} from "../Todo";
import {TodoService} from "../todo.service";
import { NgModule } from "@angular/core";
import {Category} from "../Category";
import {Priority} from "../Priority";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PriorityChooserComponent} from "../priority-chooser/priority-chooser.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [
    FormsModule,
    PriorityChooserComponent,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent {
  todo: Todo;
  constructor(private todoService: TodoService) {
    this.todo = new Todo();
  }
  get categories(): Category[] {
    return this.todoService.categories;
  }
  ngOnInit() {

  }
  save() {
    this.todoService.save(this.todo);
  }
  priorityChoosed(priority: Priority) {
    this.todo.priority = priority;
  }
}
