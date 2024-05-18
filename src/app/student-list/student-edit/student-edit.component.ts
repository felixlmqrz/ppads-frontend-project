import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrl: './student-edit.component.css'
})
export class StudentEditComponent implements OnInit {
  studentId: string;
  isEditMode = true;
  studentName: string;
  classroomId: string;

  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit() {
    this.studentId = this.route.snapshot.params['id'];
    if (this.studentId == 'new') {
      this.isEditMode = false;
      return;
    }
    this.studentService.fetchStudent(this.studentId).subscribe(student => {
      this.studentName = student.studentName;
      this.classroomId = student.classroom.id;
    });
  }

  onSaveClassroom(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const student = {
      studentName: form.value.studentName,
      classroomId: form.value.classroomId
    };
    if (this.isEditMode) {
      this.studentService.updateStudent(this.studentId, student).subscribe();
    } else {
      this.studentService.storeStudent(student).subscribe();
    }
  }
}
