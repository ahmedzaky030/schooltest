import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StudentComponent } from './student.component';
import { AddStudentComponent } from './add-student/add-student.component';

import { FirebaseServiceService } from '../../services/firebaseService/firebase-service.service';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  // let mockFB: FirebaseServiceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StudentComponent,
        AddStudentComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [ ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  fit('should remove by calling FB', () => {
    const key = 'abc';
    // spyOn(fb, 'deleteStudent');
    // component.remove(key);
    // expect(fb.deleteStudent).toHaveBeenCalledWith(key);
    expect('').toBe('or not to be');
  });

  // it('should bind correctly',()=>{
  //   let student = {name:'kkk',age:55,nationality:'dutch'};
  //   component.selectedStudent =student ;
  //   fixture.detectChanges();
  //   fixture.whenStable().then(()=>{
  //     let compiled = fixture.debugElement.nativeElement;
  //     let name = compiled.querySelect('#student-name');
  //     expect(name.value).toBe(student.name);
  //     name.value = 'www';
  //     name.click();
  //     fixture.detectChanges();
  //     expect(component.selectedStudent.name).toBe('www');
  //   });
  // });
});
