import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {PaymentsComponent} from './payments.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {path:'payments/list', component : PaymentsComponent},
      {path:'payments/add' , component: AddPaymentComponent}

    ])

  ],
  declarations: [PaymentsComponent, AddPaymentComponent]
})
export class PaymentsModule { }
