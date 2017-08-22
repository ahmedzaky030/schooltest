import { Injectable } from '@angular/core';
import {AngularFireDatabase , FirebaseListObservable} from 'angularfire2/database';
import { IStudent } from '../../models/IStudent';
@Injectable()
export class FirebaseServiceService {
  data:FirebaseListObservable<any>;
  constructor( private af:AngularFireDatabase) {
    this.data = this.af.list('https://shopping-cart-6b7ac.firebaseio.com');
    //this.data.forEach(x => console.log(x));
  }


  addStudent(student :IStudent){
    console.log('console from service')
    console.log(student);
    if(student.name && student.age && student.nationality){
      let cs = this.data.push(student);
      console.log(cs);
      debugger;

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
