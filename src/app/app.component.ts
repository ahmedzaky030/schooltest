import { Component } from '@angular/core';
import { FirebaseServiceService } from '../app/services/firebaseService/firebase-service.service';
import { FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
}
