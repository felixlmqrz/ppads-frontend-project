import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassroomService } from '../../services/classroom.service';
import { Classroom } from '../../models/classroom.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-classroom-edit',
  templateUrl: './classroom-edit.component.html',
  styleUrl: './classroom-edit.component.css'
})
export class ClassroomEditComponent implements OnInit {
  classroomId: string;
  isEditMode = true;
  classroomName: string;

  constructor(private route: ActivatedRoute, private clasroomService: ClassroomService) { }

  ngOnInit() {
    this.classroomId = this.route.snapshot.params['id'];
    if (this.classroomId == 'new') {
      this.isEditMode = false;
      return;
    }
    this.clasroomService.fetchClassroom(this.classroomId).subscribe(classroom => {
      this.classroomName = classroom.classroomName;
    });
  }

  onSaveClassroom(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const classroom = new Classroom(null, form.value.classroomName);
    if (this.isEditMode) {
      this.clasroomService.updateClassroom(this.classroomId, classroom).subscribe();
    } else {
      this.clasroomService.storeClassroom(classroom).subscribe();
    }
  }
}
