import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database/';
import { ICLass } from '../model/IClass';
import { IPayment } from '../../payments/model/IPayment';
import { FormGroup , FormBuilder, Validators , AbstractControl } from '@angular/forms';
import { FirebaseServiceService } from '../../../services/firebaseService/firebase-service.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {
  classForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
  private firebase: FirebaseServiceService,
  ) { }

  ngOnInit() {
    this.classForm = this.formBuilder.group({
      classname: ['', Validators.required],
      total: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  submit(form: FormGroup) {
    console.log(form.controls);
  }
}
