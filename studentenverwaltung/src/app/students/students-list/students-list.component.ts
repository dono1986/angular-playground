import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { Student } from '../student.model';
import { StudentsService } from '../students.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})

@Injectable()
export class StudentsListComponent implements OnInit, OnDestroy {

  students: Student[];

  selectedStudent: Student;

  studentSubscription: Subscription;

  constructor(public studService: StudentsService) {

  }

  ngOnInit() {

    this.studentSubscription = this.studService.studentsListChanged.subscribe((students) => {
      console.log('Students changed');
      this.students = students;
    });

    this.students = this.studService.getStudents();
  }

  ngOnDestroy() {
      this.studentSubscription.unsubscribe();
  }

  onStudentSelected(event: Student) {
    console.log(event);
    this.selectedStudent = event;
  }




}
