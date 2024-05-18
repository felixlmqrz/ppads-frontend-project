import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Lesson } from "../models/lesson.model";

interface lessonData {
    lessonDate: Date;
    subjectId: number;
}

interface attendanceData {
    studentId: number;
    presence: boolean;
}

@Injectable({ providedIn: "root" })
export class LessonService {
    constructor(private http: HttpClient) { }

    fetchLessons() {
        return this.http
            .get<Lesson[]>('http://localhost:8080/lessons');
    }

    fetchLessonById(lessonId: string) {
        return this.http
            .get<Lesson>('http://localhost:8080/lessons/' + lessonId);
    }

    fetchLessonByDate(lessonDate: Date) {
        return this.http
            .get<Lesson[]>('http://localhost:8080/lessons/date/' + lessonDate);
    }

    storeLesson(lesson: lessonData) {
        return this.http
            .post<Lesson>('http://localhost:8080/lessons', lesson);
    }

    takeAttendance(lessonId: string, attendances: attendanceData[]) {
        return this.http
            .post('http://localhost:8080/lessons/' + lessonId + '/takeAttendance', attendances);
    }
}
