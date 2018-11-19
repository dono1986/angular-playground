import { Component, OnInit, Input } from '@angular/core';
import {Student} from '../../student.model';

@Component({
  selector: 'app-students-list-item',
  templateUrl: './students-list-item.component.html',
  styleUrls: ['./students-list-item.component.scss']
})
export class StudentsListItemComponent implements OnInit {

  @Input() student: Student;

  constructor() { }

  ngOnInit() {
  }

}
