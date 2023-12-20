import {Category} from './Category';
import {Priority} from './Priority';
export class Todo{
  done: boolean;
  constructor(public id?: number, public term?: string, public category?: Category, public priority?: Priority ) {
    this.done = false;
  }
}

