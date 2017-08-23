import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FirebaseServiceService } from '../../../services/firebaseService/firebase-service.service';
import { IStudent} from '../models/IStudent';

import {FirebaseObjectObservable } from 'angularfire2/database';
@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student:IStudent;
  constructor(private router:Router ,
     private actRouted:ActivatedRoute ,
     private fb:FirebaseServiceService) {


  }

  ngOnInit() {
   let key = this.actRouted.snapshot.params['key'];
   console.log(key);
   this.student = this.fb.getStudentbyKey(key);
   console.log('detail');
   console.log(this.student);

  }

  BackToHome(){
    this.router.navigate(['/students/list']);
  }

}
