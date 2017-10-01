import { Route } from '@angular/router';
import { StudentComponent } from '../app/components/student/student.component';
import { PaymentsComponent } from '../app/components/payments/payments.component';
import { AppComponent } from './app.component';
import { ClassesComponent } from '../app/components/classes/classes.component';

export const routes: Route [] = [
  {path: 'payments' , component: PaymentsComponent},
  {path: 'students' , component: StudentComponent},
  {path: 'classes' , component: ClassesComponent }
];
