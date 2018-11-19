import { Component, OnInit, Injectable } from '@angular/core';
import { Student } from '../student.model';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})

@Injectable()
export class StudentsListComponent implements OnInit {

  students: Student[];

  constructor(public studService: StudentsService) { }

  ngOnInit() {

    this.students = this.studService.getStudents();

  }

}
