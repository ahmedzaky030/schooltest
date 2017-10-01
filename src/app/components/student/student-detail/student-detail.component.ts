import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FirebaseServiceService } from '../../../services/firebaseService/firebase-service.service';
import { IStudent} from '../models/IStudent';

import {FirebaseObjectObservable } from 'angularfire2/database';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: IStudent = null;
  constructor(private router: Router,
     private actRouted: ActivatedRoute,
     private fb: FirebaseServiceService) {

  }

  ngOnInit() {
   const key = this.actRouted.snapshot.params['key'];
   this.fb.getStudentbyKey(key);
   this.student = this.fb.studentObject;

  }

  BackToHome() {
    this.router.navigate(['/students/list']);
  }
}
