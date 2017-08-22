import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../../../services/firebaseService/firebase-service.service';
import { FirebaseListObservable , FirebaseObjectObservable} from 'angularfire2/database';
import { IStudent } from '../models/IStudent';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router'
import  'rxjs';
@Component({
  selector: 'student-list',
  templateUrl: './student-list-component.component.html',
  styleUrls: ['./student-list-component.component.css']
})
export class StudentListComponent implements OnInit {
  isAdd:boolean = false;
  messageFromChild:string;
  isEdit =false;
  selectedStudent:IStudent;

  items: FirebaseListObservable<IStudent[]>;
  constructor(private fb:FirebaseServiceService ,
  private router:Router){
     this.items = this.fb.data;
  }
  ngOnInit() {
  }
  toggleAdd() : void{
    this.isAdd =  !this.isAdd;
  }

  onAddedStudent(message : string) {
    this.toggleAdd();
    this.messageFromChild = message;
  }

  BackToHome(){
    this.router.navigate(['students']);

  }


  remove(key:string){
    this.fb.deleteStudent(key);
  }

  update(key, event:KeyboardEvent){
    if(event.keyCode !== 13)
      return;

    if(this.selectedStudent && this.selectedStudent.name && this.selectedStudent.age && this.selectedStudent.nationality){
      this.fb.updateStudent(key , this.selectedStudent);
      this.selectedStudent = null;
      this.isEdit = false;
    }
  }

  cancel(){
    this.isEdit = false;
    this.selectedStudent = null;
  }

  edit(obj:IStudent,key: string) {
    this.selectedStudent = obj;
    this.isEdit = true;
    }

}
