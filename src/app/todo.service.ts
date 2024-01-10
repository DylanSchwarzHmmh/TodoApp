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
  testTodo?: Todo ;
  cat?: Category;
  categories: Category[] = [
    {
      id: 0,
      name: 'Haushalt'
    },
    {
      id: 1,
      name: 'Finanzen'
    },
    {
      id: 2,
      name: 'Verein'
    },
    {
      id: 3,
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
  deleteAll(){
    this.keys = Object.keys(this.todoDB);
    this.i = this.keys.length;
    while (this.i--) {
      const todo = this.getTodo(parseInt(this.keys[this.i]));
      if (todo) {
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
    }
    return 0;
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
    this.i = existingIDs[existingIDs.length - 1] + 1;

    return this.i;
  }
  getCategory(id: number):Category{
    this.cat = this.categories[id];
    return this.cat;
  }
  addTestdata(){
    this.testTodo = new Todo( this.generateID(), 'Training', this.getCategory(2), 1);
    try {
      if (this.testTodo.id !== undefined) {
        this.id = this.testTodo.id.toString();
        this.todoDB.setItem(this.id, JSON.stringify(this.testTodo));
        console.log("saved");
      } else {
        console.error("Todo id is undefined");
      }
    } catch (e) {
      console.error(e);
    }
    this.testTodo = new Todo( this.generateID(), 'Hausaufgaben', this.getCategory(3), 1);
    try {
      if (this.testTodo.id !== undefined) {
        this.id = this.testTodo.id.toString();
        this.todoDB.setItem(this.id, JSON.stringify(this.testTodo));
        console.log("saved");
      } else {
        console.error("Todo id is undefined");
      }
    } catch (e) {
      console.error(e);
    }
    this.testTodo = new Todo( this.generateID(), 'Putzen', this.getCategory(0), 0);
    try {
      if (this.testTodo.id !== undefined) {
        this.id = this.testTodo.id.toString();
        this.todoDB.setItem(this.id, JSON.stringify(this.testTodo));
        console.log("saved");
      } else {
        console.error("Todo id is undefined");
      }
    } catch (e) {
      console.error(e);
    }
    this.testTodo = new Todo( this.generateID(), 'Geld abheben', this.getCategory(1), 2);
    try {
      if (this.testTodo.id !== undefined) {
        this.id = this.testTodo.id.toString();
        this.todoDB.setItem(this.id, JSON.stringify(this.testTodo));
        console.log("saved");
      } else {
        console.error("Todo id is undefined");
      }
    } catch (e) {
      console.error(e);
    }

  }

}

