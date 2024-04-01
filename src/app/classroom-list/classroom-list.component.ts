import { Component, OnInit } from '@angular/core';
import { Classroom } from '../models/classroom.model';
import { ClassroomService } from '../services/classroom.service';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css'
})
export class ClassroomListComponent implements OnInit {
  classrooms: Classroom[] = [];

  constructor(private classroomService: ClassroomService) { }

  ngOnInit() {
    this.classroomService.fetchClassrooms().subscribe(classrooms => {
      this.classrooms = classrooms;
    });
  }
}
