import { Component, OnInit, Input, Output, ViewChild, Injectable, EventEmitter } from '@angular/core';
import { Student } from '../student.model';
import { NgForm } from '@angular/forms';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['./students-edit.component.scss']
})
@Injectable()
export class StudentsEditComponent implements OnInit {

  @Input() student: Student;
  @ViewChild('f') form: NgForm;

  @Output() deleteRequested = new EventEmitter<Student>();

  constructor(public studentsService: StudentsService) { }

  save() {
    console.log(this.form);
        this.student = new Student(this.form.value.firstname, this.form.value.lastname, this.form.value.registrationNumber);
        this.studentsService.addStudent(this.student);
     /*else {
      this.student.firstname = this.form.value.firstname;
      this.student.lastname = this.form.value.lastname;
      this.student.registrationNumber = this.form.value.registrationNumber;
    }*/
  }

  delete() {
    this.deleteRequested.emit();
  }

  ngOnInit() {
  }

}

