import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from '../../services/teacher.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrl: './teacher-edit.component.css'
})
export class TeacherEditComponent {
  teacherId: string;
  isEditMode = true;
  teacherName: string;
  subjectName: string;
  classroomId: string;

  constructor(private route: ActivatedRoute, private teacherService: TeacherService) { }

  ngOnInit() {
    this.teacherId = this.route.snapshot.params['id'];
    if (this.teacherId == 'new') {
      this.isEditMode = false;
      return;
    }
    this.teacherService.fetchTeacher(this.teacherId).subscribe(teacher => {
      this.teacherName = teacher.teacherName;
      this.subjectName = teacher.subject.subjectName;
      this.classroomId = teacher.subject.classroom.id;
    });
  }

  onSaveTeacher(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const teacher = {
      teacherName: form.value.teacherName,
      subjectName: form.value.subjectName,
      classroomId: form.value.classroomId
    };
    if (this.isEditMode) {
      this.teacherService.updateTeacher(this.teacherId, teacher).subscribe();
    } else {
      this.teacherService.storeTeacher(teacher).subscribe();
    }
  }
}
