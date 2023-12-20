import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Priority} from '../Priority';
import {Todo} from '../Todo';
import {Category} from "../Category";

@Component({
  selector: 'app-priority-chooser',
  standalone: true,
  imports: [],
  templateUrl: './priority-chooser.component.html',
  styleUrl: './priority-chooser.component.css'
})
export class PriorityChooserComponent {

  category = Category;
  priority = Priority;

  @Output() choosed = new EventEmitter<Priority>();
  @Input() todo?: Todo;

  constructor() {
  }

  ngOnInit() {
  }

  select(priority : Priority) {
    this.choosed.emit(priority);
  }
}
