import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Classroom } from "../models/classroom.model";

@Injectable({ providedIn: "root" })
export class ClassroomService {
    constructor(private http: HttpClient) { }

    fetchClassrooms() {
        return this.http
            .get<Classroom[]>('http://localhost:8080/classrooms');
    }

    fetchClassroom(classroomId: string) {
        return this.http
            .get<Classroom>('http://localhost:8080/classrooms/' + classroomId);
    }

    storeClassroom(classroom: Classroom) {
        return this.http
            .post<Classroom>('http://localhost:8080/classrooms', classroom);
    }

    updateClassroom(classroomId: string, classroom: Classroom) {
        return this.http
            .put<Classroom>('http://localhost:8080/classrooms/' + classroomId, classroom);
    }
}
