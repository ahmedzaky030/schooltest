import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database/';
import { IStudent } from '../../student/models/IStudent';
import { IPayment } from '../../payments/model/IPayment';
import { FormGroup , FormBuilder, Validators , AbstractControl } from '@angular/forms';
import { FirebaseServiceService } from '../../../services/firebaseService/firebase-service.service';

function NumberValidator(c: AbstractControl):{[key:string]:boolean} | null {
  let value = c.value;
  if(isNaN(value)){
    return {'notNumber':true}
  }
  return null;
}

@Component({
  selector: 'add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {
  total: number;
  half : number ;
  firstP : number;
  secP : number;
  thirdP:number;
  fourthP : number;
  fifthP : number;
  listOfStudent: FirebaseListObservable<IStudent>;
  paymentForm:FormGroup;
  newPayment: IPayment;

  constructor(private fireb:FirebaseServiceService ,
  private formb: FormBuilder) {

   }

  ngOnInit() {
    this.listOfStudent = this.fireb.paymentsData;
    this.paymentForm = this.formb.group({
      'total':['', [Validators.required  , NumberValidator]],
      'half':'',
      'firstP':'',
      'secP':'',
      'thirdP':'',
      'fourthP':'',
      'fifthP':'',
      'userKey':['',Validators.required]
    });
  }

  calculate(){
    this.half = this.total /2 ;
    this.firstP = this.half / 5;
    this.secP = this.half / 5;
    this.thirdP = this.half / 5;
    this.fourthP = this.half / 5;
    this.fifthP = this.half / 5 ;
  }

  submit(form:FormGroup){
    this.newPayment = {
     total: form.controls.total.value,
     userKey : form.controls.userKey.value,
     half: form.controls.half.value,
     firstPay : form.controls.firstP.value,
     secPay : form.controls.secP.value,
     thirdPay : form.controls.thirdP.value,
     fourthPay : form.controls.fourthP.value,
     fifthPay : form.controls.fifthP.value,
    };

    //this.fireb.addPayment(this.newPayment);
  }

}
