import { Injectable } from '@angular/core';
import {Todo} from './Todo';
import {Category} from "./Category";



@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoDB = localStorage;
  id:string = '';
  todos : Todo[] =[];
  keys : any[] = [];
  i : number = 0;
  categories: Category[] = [
    {
      id: 1,
      name: 'Haushalt'
    },
    {
      id: 2,
      name: 'Finanzen'
    },
    {
      id: 3,
      name: 'Verein'
    },
    {
      id: 4,
      name: 'Schule'
    },
  ];


  constructor(){

  }

  save(todo:Todo){
    todo.id = this.generateID();
    this.id = todo.id.toString();
    this.todoDB.setItem(this.id, JSON.stringify(todo));
    console.log("saved");
  }


  delete(todo:Todo){
    try {
      if (todo.id !== undefined) {
        this.id = todo.id.toString();
        this.todoDB.removeItem(this.id);
      } else {
        console.error("Todo id is undefined");
      }
    } catch (e) {
      console.error(e);
    }
  }

  getTodo(id: number): Todo | undefined {
    this.id = id.toString();
    const todoString = this.todoDB.getItem(this.id);
    if (todoString) {
      const todo: Todo = JSON.parse(todoString);
      return todo;
    }
    return undefined;
  }



  getTodos(): Todo[] {
    this.keys = Object.keys(this.todoDB);
    this.i = this.keys.length;
    this.todos = [];

    while (this.i--) {
      const todo = this.getTodo(parseInt(this.keys[this.i]));
      if (todo) {
        this.todos.push(todo);
      }
    }
    return this.todos;
  }

  generateID():number{
    this.keys = Object.keys(this.todoDB);
    this.i = this.keys.length;
    if (this.i === 0) {
      return 1;
    }
    const existingIDs = this.keys.map(Number).sort((a, b) => a - b);
    for (let j = 1; j < existingIDs.length; j++) {
      if (existingIDs[j] - existingIDs[j - 1] > 1) {
        return existingIDs[j - 1] + 1;
      }
    }
    return existingIDs[existingIDs.length - 1] + 1;
  }



}

