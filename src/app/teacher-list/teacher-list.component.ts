import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/teacher.model';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css'
})
export class TeacherListComponent implements OnInit {
  teachers: Teacher[] = [];

  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
    this.teacherService.fetchTeachers().subscribe(teachers => {
      this.teachers = teachers;
    });
  }
}
