import { Injectable } from '@angular/core';
import {AngularFireDatabase , FirebaseObjectObservable , FirebaseListObservable} from 'angularfire2/database';
import { IStudent } from '../../components/student/models/IStudent';
import 'rxjs/Operator';
import { IPayment} from '../../components/payments/model/IPayment';
@Injectable()
export class FirebaseServiceService {
  studentData: FirebaseListObservable<IStudent[]>;
  students:Array<IStudent>;
  object: any;
  studentObject:IStudent;
  paymentsData: FirebaseListObservable<IPayment[]>;
  payments:Array<IPayment[]>;

  constructor( private af: AngularFireDatabase ) {
    this.af.list('https://shopping-cart-6b7ac.firebaseio.com/students').subscribe(t => this.students = t);
    this.af.list('https://shopping-cart-6b7ac.firebaseio.com/payments').subscribe(t => this.payments = t);
    this.studentData = this.af.list('https://shopping-cart-6b7ac.firebaseio.com/students');
    this.paymentsData = this.af.list('https://shopping-cart-6b7ac.firebaseio.com/payments');

  }


  addStudent(student: IStudent ) {
    if (student.name && student.age && student.nationality) {
      this.studentData.push(student);
    }



  }

  updateStudent(key: string, student: IStudent ) {
    this.studentData.update(key, student);
  }

  deleteStudent(key: string ) {
    this.studentData.remove(key);
  }

  getStudentbyKey(key: string) {
    this.af.object('https://shopping-cart-6b7ac.firebaseio.com/students/' + key)
    .subscribe(x => {this.studentObject = x; } );
  }

  addPayment(payment: IPayment ) {
    if (payment.userKey && payment.total) {
      this.paymentsData.push(payment);
    }
  }

  deletePayment(key: string ) {
    this.paymentsData.remove(key);
  }

  updatePayment(key: string, payment: IPayment ) {
    this.paymentsData.update(key, payment);
  }

  getPaymentbyKey(key): IPayment {
    this.af.object('https://shopping-cart-6b7ac.firebaseio.com/payment/' + key)
    .subscribe(x => { this.object = x; } );
    // this.data.find(x=> x.$key == key).subscribe(x => this.object = x);
    return this.object;
  }

}
