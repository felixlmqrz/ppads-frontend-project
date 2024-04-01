import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Student } from "../models/student.model";

@Injectable({ providedIn: "root" })
export class StudentService {
    constructor(private http: HttpClient) { }

    fetchStudents() {
        return this.http
            .get<{ [key: string]: Student }>(
                'http://localhost:8080/students'
            )
            .pipe(
                map(responseData => {
                    const studentsArray: Student[] = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            studentsArray.push({ ...responseData[key], id: key });
                        }
                    }
                    return studentsArray;
                })
            );
    }
}