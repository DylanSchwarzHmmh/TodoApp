import { Component, OnInit } from '@angular/core';
import {Todo} from '../Todo';
import {TodoService} from '../todo.service';
import {PriorityChooserComponent} from "../priority-chooser/priority-chooser.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [PriorityChooserComponent, NgForOf, NgIf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent  implements OnInit {
  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
  }

  get todos(): Todo[] {
    return this.todoService.getTodos();
  }




  delete(t: Todo) {
    this.todoService.delete(t);
  }

}
