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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClassroomListComponent,
    ClassroomEditComponent,
    TeacherListComponent,
    TeacherEditComponent,
    StudentListComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
