import { Component } from '@angular/core';
import {TodoService} from "../todo.service";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(public todoService: TodoService) {
  }

  sidebarClosed(){

  }

}
