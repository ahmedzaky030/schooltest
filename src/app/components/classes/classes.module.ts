import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { ClassesListComponent } from './classes-list/classes-list.component';
import { AddClassComponent } from './add-class/add-class.component';
import { ClassesComponent } from './classes.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule ,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'classes', children: [
          { path: '', component: ClassesComponent },
          { path: 'list', component: ClassesListComponent },
          { path: 'add', component: AddClassComponent }
        ]
      }
    ])
  ],
  declarations: [ClassesListComponent, AddClassComponent, ClassesComponent]
})
export class ClassesModule { }
