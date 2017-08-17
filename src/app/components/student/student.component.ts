import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../../services/firebaseService/firebase-service.service';
import { FirebaseListObservable} from 'angularfire2/database';
import { IStudent } from '../../models/IStudent'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  isAdd:boolean = false;
  messageFromChild:string;

  items: FirebaseListObservable<IStudent>;
  constructor(private fb:FirebaseServiceService){
     this.items = this.fb.data;
  }
  ngOnInit() {

  }

  toggleAdd() : void{
    this.isAdd =  !this.isAdd;
  }

  onAddedStudent(message : string) {
    this.toggleAdd();
    this.messageFromChild = message;
    this.clear();


  }
  clear(){
    console.log('inside clear');
    setTimeout(function(){
      console.log('inside setTimeout');
      this.messageFromChild = null;
    } , 3000);
  }


}
