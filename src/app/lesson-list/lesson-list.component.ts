import { Component, OnInit } from '@angular/core';
import { LessonService } from '../services/lesson.service';
import { FormArray, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrl: './lesson-list.component.css'
})
export class LessonListComponent implements OnInit {
  lessonId: string;
  lessonDate: Date;
  attendanceForm: FormGroup;
  attendances = [];

  ngOnInit() {
    this.attendanceForm = new FormGroup({
      'attendances': new FormArray([])
    });
  }

  constructor(private lessonService: LessonService) { }

  onSubmit(form: NgForm) {
    (<FormArray>this.attendanceForm.get('attendances')).clear();

    if (!form.valid) {
      return;
    }

    this.lessonDate = form.value.lessonDate;

    this.lessonService.fetchLesson(this.lessonDate).subscribe(lesson => {
      if (lesson.length > 0) {
        this.lessonId = lesson[0].id;
        for (let attendance of lesson[0].attendances) {
          const control = new FormGroup({
            'id': new FormControl(attendance.student.id),
            'studentName': new FormControl(attendance.student.studentName),
            'presence': new FormControl(attendance.presence)
          });
          (<FormArray>this.attendanceForm.get('attendances')).push(control);
        }
      } else {
        const lessonData = {
          lessonDate: this.lessonDate,
          subjectId: 1
        };
        this.lessonService.storeLesson(lessonData).subscribe(lesson => {
          this.lessonId = lesson.id;
          for (let attendance of lesson.attendances) {
            const control = new FormGroup({
              'id': new FormControl(attendance.student.id),
              'studentName': new FormControl(attendance.student.studentName),
              'presence': new FormControl(attendance.presence)
            });
            (<FormArray>this.attendanceForm.get('attendances')).push(control);
          }
        });
      }
    });
  }

  onTakeAttendance() {
    this.attendances = [];
    for (let attendance of this.attendanceForm.value.attendances) {
      const attendanceData = {
        studentId: attendance.id,
        presence: attendance.presence
      };
      this.attendances.push(attendanceData);
    }
    this.lessonService.takeAttendance(this.lessonId, this.attendances).subscribe({});
  }

  getControls() {
    return (<FormArray>this.attendanceForm.get('attendances')).controls;
  }
}
