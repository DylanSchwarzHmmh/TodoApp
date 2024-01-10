import { Component, OnInit } from '@angular/core';
import {Todo} from '../Todo';
import {TodoService} from '../todo.service';
import {PriorityChooserComponent} from "../priority-chooser/priority-chooser.component";
import {NgForOf, NgIf} from "@angular/common";
import {Priority} from "../Priority";
import {FormsModule} from "@angular/forms";
import {SidebarComponent} from "../sidebar/sidebar.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [PriorityChooserComponent, NgForOf, NgIf, FormsModule, SidebarComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent  implements OnInit {
  searchTodos: Todo[] = [];
  safeTodos: Todo[] = [];
  nullTodos: Todo[] = [];
  searchTerm: string = '';
  todos: Todo[] = [];
  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todos = this.todoService.getTodos();
    this.safeTodos = this.todoService.getTodos();
  }

  search(){
    this.searchTodos = [];
    if (this.searchTerm) {
      console.log(this.searchTerm);
      this.getTodos();
      this.todos.filter((t) => {
        // @ts-ignore
        if(t.term.toLowerCase().includes(this.searchTerm.toLowerCase()) || t.category.name.toLowerCase().includes(this.searchTerm.toLowerCase())){
          this.searchTodos.push(t);
        }else{
        }
        }
      );
    } else {
      this.searchTodos = this.todoService.getTodos();
    }
    console.log(this.searchTodos);

      this.todos = this.searchTodos;

  }



  delete(t: Todo) {
    this.todoService.delete(t);
    this.getTodos();
  }

    protected readonly Priority = Priority;
}
