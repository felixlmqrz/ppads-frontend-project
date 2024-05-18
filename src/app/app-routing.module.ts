import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassroomListComponent } from './classroom-list/classroom-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AuthComponent } from './auth/auth.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { ClassroomEditComponent } from './classroom-list/classroom-edit/classroom-edit.component';
import { StudentEditComponent } from './student-list/student-edit/student-edit.component';
import { LessonEditComponent } from './lesson-list/lesson-edit/lesson-edit.component';
import { TeacherEditComponent } from './teacher-list/teacher-edit/teacher-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'salas', pathMatch: 'full' },
  {
    path: 'salas', component: ClassroomListComponent, children: [
      { path: ':id', component: ClassroomEditComponent }
    ]
  },
  {
    path: 'professores', component: TeacherListComponent, children: [
      { path: ':id', component: TeacherEditComponent }
    ]
  },
  {
    path: 'alunos', component: StudentListComponent, children: [
      { path: ':id', component: StudentEditComponent }
    ]
  },
  { path: 'auth', component: AuthComponent },
  {
    path: 'aulas', component: LessonListComponent, children: [
      { path: ':id', component: LessonEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
