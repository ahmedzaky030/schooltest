import { Injectable } from '@angular/core';
import {AngularFireDatabase , FirebaseListObservable} from 'angularfire2/database';
import { IStudent } from '../../models/IStudent';
@Injectable()
export class FirebaseServiceService {
  data:FirebaseListObservable<any>;
  constructor( private af:AngularFireDatabase) {
    this.data = this.af.list('https://shopping-cart-6b7ac.firebaseio.com');
  }


  addStudent(student: IStudent) {
    if (student.name && student.age && student.nationality) {
      this.data.push(student);
    }

  }

  updateStudent(key:string, student:IStudent) {
    this.data.update(key,student);
  }

  deleteStudent(key:string) {
    this.data.remove(key);
    console.log("has been deleted successfully");
  }

}
