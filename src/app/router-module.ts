import { Route } from '@angular/router';
import { StudentComponent } from '../app/components/student/student.component';
import { PaymentsComponent } from '../app/components/payments/payments.component';
import { AppComponent } from './app.component';

export const routes : Route [] = [
  { path:'student' , component:StudentComponent} ,
{path:'payments' , component:PaymentsComponent}
]
