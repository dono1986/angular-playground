import { Component, OnInit, ViewChild, Injectable} from '@angular/core';
import { Student } from '../student.model';
import { NgForm } from '@angular/forms';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-new',
  templateUrl: './students-new.component.html',
  styleUrls: ['./students-new.component.scss']
})
@Injectable()
export class StudentsNewComponent implements OnInit {

  defaultFirstname = 'Max';
  defaultLastname = 'Mustermann';
  defaultRegistrationNumber = true;

  @ViewChild('f') form: NgForm;

  constructor(public studentsService: StudentsService) { }



  save() {
    console.log(this.form);
    const student = new Student(this.form.value.firstname, this.form.value.lastname, this.form.value.registrationNumber);
    this.studentsService.addStudent(student);
  }

  test() {
    this.defaultFirstname = 'Luigi '; // + Math.random() ;
  }

  ngOnInit() {
    console.log(this.form);
  }

}

