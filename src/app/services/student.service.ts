import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Student } from "../models/student.model";

interface StudentData {
    id?: string;
    studentName: string;
    classroomId: string;
}

@Injectable({ providedIn: "root" })
export class StudentService {
    constructor(private http: HttpClient) { }

    fetchStudents() {
        return this.http
            .get<Student[]>('http://localhost:8080/students');
    }

    fetchStudent(studentId: string) {
        return this.http
            .get<Student>('http://localhost:8080/students/' + studentId);
    }

    storeStudent(student: StudentData) {
        return this.http
            .post<Student>('http://localhost:8080/students', student);
    }

    updateStudent(studentId: string, student: StudentData) {
        return this.http
            .put<Student>('http://localhost:8080/students/' + studentId, student);
    }
}
