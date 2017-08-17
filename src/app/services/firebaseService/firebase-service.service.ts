import { Injectable } from '@angular/core';
import {AngularFireDatabase , FirebaseListObservable} from 'angularfire2/database';
import { IStudent } from '../../models/IStudent';
@Injectable()
export class FirebaseServiceService {
  data:FirebaseListObservable<any>;
  constructor( private af:AngularFireDatabase) {
    this.data = this.af.list('https://shopping-cart-6b7ac.firebaseio.com');
    console.log(this.data);
  }


  addStudent(student :IStudent){
    console.log('console from service')
    console.log(student);
    if(student.name && student.age && student.nationality)
      this.data.push(student);
  }

}
