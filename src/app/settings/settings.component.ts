import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {PriorityChooserComponent} from "../priority-chooser/priority-chooser.component";
import {TodoService} from "../todo.service";
import {Todo} from "../Todo";

@Component({
  selector: 'app-settings',
  standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        PriorityChooserComponent
    ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  constructor(public todoService: TodoService) {

  }
  deleteAll() {
    this.todoService.deleteAll();
  }
  addTestdata(){
    this.todoService.addTestdata();
  }
}
