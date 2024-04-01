import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassroomListComponent } from './classroom-list/classroom-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { StudentListComponent } from './student-list/student-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'classroom', pathMatch: 'full' },
  { path: 'classroom', component: ClassroomListComponent },
  { path: 'teacher', component: TeacherListComponent },
  { path: 'student', component: StudentListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
