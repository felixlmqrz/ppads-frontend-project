import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClassroomListComponent } from './classroom-list/classroom-list.component';
import { ClassroomEditComponent } from './classroom-list/classroom-edit/classroom-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherEditComponent } from './teacher-list/teacher-edit/teacher-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-list/student-edit/student-edit.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClassroomListComponent,
    ClassroomEditComponent,
    TeacherListComponent,
    TeacherEditComponent,
    StudentListComponent,
    StudentEditComponent,
    AuthComponent,
    UserListComponent,
    UserEditComponent,
    LessonListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
