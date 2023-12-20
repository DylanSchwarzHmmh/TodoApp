import { Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {AddFormComponent} from "./add-form/add-form.component";
import {SettingsComponent} from "./settings/settings.component";

export const routes: Routes = [
  {
    path:'',
    component: ListComponent,
    title: 'Homepage',
  },
  {
    path:'addtodo',
    component: AddFormComponent,
    title: 'Add Todo',
  },
  {
    path:'settings',
    component: SettingsComponent,
    title: 'Settings',
  }
];
