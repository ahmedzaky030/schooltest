import { Injectable } from '@angular/core';
import {AngularFireDatabase , FirebaseObjectObservable , FirebaseListObservable} from 'angularfire2/database';
import { IStudent } from '../../components/student/models/IStudent';
import 'rxjs';
@Injectable()
export class FirebaseServiceService {
  data:FirebaseListObservable<any>;
  object:any;

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

  getStudentbyKey(key):  IStudent {
    this.af.object('https://shopping-cart-6b7ac.firebaseio.com/' + key)
    .subscribe(x => {console.log(x); console.log('next'); this.object = x; } , y => console.info(y) ,() => console.log('completed'));

    console.log('inside the service');

    //this.data.find(x=> x.$key == key).subscribe(x => this.object = x);
    console.log(this.object);
    return this.object;
  }

}
