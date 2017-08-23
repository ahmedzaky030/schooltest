import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from '../student/add-student/add-student.component';
//import {FirebaseServiceService} from '../../services/firebaseService/firebase-service.service';
import { StudentListComponent } from '../student/student-list-component/student-list-component.component'
import { StudentComponent } from './student.component';
import { StudentDetailComponent } from '../student/student-detail/student-detail.component'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'students' ,
    children:[{path:'' , component:StudentComponent} ,
    {path:'list' , component:StudentListComponent},
    {path:'add',component:AddStudentComponent},
    {path:':key' , component:StudentDetailComponent}]},
    ]),
  ReactiveFormsModule,
  FormsModule
  ],
  declarations: [AddStudentComponent , StudentListComponent , StudentComponent, StudentDetailComponent]
})
export class StudentsModule { }
