import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { Ng2BootstrapModule } from 'ngx-bootstrap';

import { StudentsModule } from '../app/components/student/students.module';
import { PaymentsModule } from '../app/components/payments/payments.module';
import { AppComponent } from './app.component';

import { PaymentsComponent } from '../app/components/payments/payments.component';
import { routes } from './router-module';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import {FirebaseServiceService} from '../app/services/firebaseService/firebase-service.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule,
    // Feature Modules
    StudentsModule,
    PaymentsModule
  ],
  providers: [ FirebaseServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
