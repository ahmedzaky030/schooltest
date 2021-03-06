import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../../services/firebaseService/firebase-service.service';
import { FirebaseListObservable , FirebaseObjectObservable} from 'angularfire2/database';
import { IStudent } from '../student/models/IStudent';
import {FormsModule} from '@angular/forms';
// import 'rxjs';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  isAdd = false;
  messageFromChild: string; // not used now
  isEdit = false;
  selectedStudent: IStudent;

  items: Array<IStudent>;
  constructor(private fb: FirebaseServiceService) {
     this.items = this.fb.students;
  }

  ngOnInit() {
  }

  toggleAdd(): void {
    this.isAdd =  !this.isAdd;
  }

  onAddedStudent(message: string) {
    this.toggleAdd();
    this.messageFromChild = message;
  }


  remove(key: string) {
    this.fb.deleteStudent(key);
  }

  update(key) {
    if (this.selectedStudent && this.selectedStudent.name && this.selectedStudent.age && this.selectedStudent.nationality) {
      this.fb.updateStudent(key , this.selectedStudent);
      this.selectedStudent = null;
      this.isEdit = false;
    }
  }

  cancel() {
    this.isEdit = false;
    this.selectedStudent = null;
  }

  edit(obj: IStudent, key: string) {
    this.selectedStudent = obj;
    this.isEdit = true;
  }
}
