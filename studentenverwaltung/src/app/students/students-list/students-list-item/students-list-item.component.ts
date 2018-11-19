import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Student} from '../../student.model';

@Component({
  selector: 'app-students-list-item',
  templateUrl: './students-list-item.component.html',
  styleUrls: ['./students-list-item.component.scss']
})
export class StudentsListItemComponent implements OnInit {

  @Output() studentSelected = new EventEmitter<Student>();

  @Input() student: Student;

  constructor() { }

  onStudentClicked() {
    console.log(this.student);
    this.studentSelected.emit(this.student);
  }

  ngOnInit() {
  }

}
