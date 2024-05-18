import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Teacher } from "../models/teacher.model";

interface teacherData {
    id?: string;
    teacherName: string;
    subjectName: string;
    classroomId: string;
}

@Injectable({ providedIn: "root" })
export class TeacherService {
    constructor(private http: HttpClient) { }

    fetchTeachers() {
        return this.http
            .get<Teacher[]>('http://localhost:8080/teachers');
    }

    fetchTeacher(teacherId: string) {
        return this.http
            .get<Teacher>('http://localhost:8080/teachers/' + teacherId);
    }

    storeTeacher(teacher: teacherData) {
        return this.http
            .post<Teacher>('http://localhost:8080/teachers', teacher);
    }

    updateTeacher(teacherId: string, teacher: teacherData) {
        return this.http
            .put<Teacher>('http://localhost:8080/teachers/' + teacherId, teacher);
    }
}
