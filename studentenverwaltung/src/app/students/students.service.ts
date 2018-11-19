import { Student } from './student.model';
import { Subject } from 'rxjs';

export class StudentsService {

    students: Student[] = [
        new Student('Carl', 'What', '125551'),
        new Student('Paul', 'McCartney', '455121'),
        new Student('Johanna', 'Mills', '810541') ];

    constructor() {}

    studentsListChanged: Subject<Student[]>;

    getStudents() {
        return this.students.slice();
    }

    getStudent(id: number) {
        return this.students[id];
    }

    addStudent(student: Student) {
        this.students.push(student);
        this.studentsListChanged.next(this.students.slice());
    }

    removeStudent(student: Student) {
        this.students.filter((value, index, students) => {
            return student !== value;
        });
        this.studentsListChanged.next(this.students.slice());

    }


}
