import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { FormGroup , FormControl , FormBuilder , Validators} from '@angular/forms';
import { IStudent} from '../../../models/IStudent';
import { FirebaseServiceService } from '../../../services/firebaseService/firebase-service.service';


@Component({
  selector: 'add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
  providers : [FirebaseServiceService]
})
export class AddStudentComponent implements OnInit {
  newStudent : IStudent;
  @Output() onAddedStudent = new  EventEmitter<string>();
  addStudentForm : FormGroup;
  constructor(private fb : FormBuilder ,private db:FirebaseServiceService) {
    this.addStudentForm = this.fb.group({
      name:'',
      age : '',
      nationality:''
    });
  }

  ngOnInit() {
  }

  addStudent(studentFrm: FormGroup): void {

    this.newStudent = {
      name: this.addStudentForm.controls.name.value,
      age: this.addStudentForm.controls.age.value,
      nationality: this.addStudentForm.controls.nationality.value
    };
    // Here must to add the new student in firebase and new collection
    this.db.addStudent(this.newStudent);
    this.onAddedStudent.emit( this.newStudent.name + ' has been added');

  }

  setvalue() : void {
    this.addStudentForm.patchValue({
      name:'name',
      age:0,
      nationality:'world'
    });
  }


}
