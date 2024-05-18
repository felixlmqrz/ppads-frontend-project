import { Component } from '@angular/core';
import { LessonService } from '../../services/lesson.service';
import { FormArray, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lesson-edit',
  templateUrl: './lesson-edit.component.html',
  styleUrl: './lesson-edit.component.css'
})
export class LessonEditComponent {
  lessonId: string;
  subjectId: string;
  isEditMode = true;
  lessonDate: Date;
  attendanceForm: FormGroup;

  constructor(private route: ActivatedRoute, private lessonService: LessonService) { }

  ngOnInit() {
    this.attendanceForm = new FormGroup({
      'attendances': new FormArray([])
    });

    this.lessonId = this.route.snapshot.params['id'];
    if (this.lessonId == 'new') {
      this.isEditMode = false;
      return;
    }

    this.lessonService.fetchLessonById(this.lessonId).subscribe(lesson => {
      this.lessonDate = lesson.lessonDate;
      this.subjectId = lesson.subject.id;
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

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const lessonData = {
      lessonDate: form.value.lessonDate,
      subjectId: form.value.subjectId
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

  onTakeAttendance() {
    const attendances = [];
    for (let attendance of this.attendanceForm.value.attendances) {
      const attendanceData = {
        studentId: attendance.id,
        presence: attendance.presence
      };
      attendances.push(attendanceData);
    }
    this.lessonService.takeAttendance(this.lessonId, attendances).subscribe({});
  }

  getControls() {
    return (<FormArray>this.attendanceForm.get('attendances')).controls;
  }
}
