import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Classroom } from "../models/classroom.model";

@Injectable({ providedIn: "root" })
export class ClassroomService {
    constructor(private http: HttpClient) { }

    fetchClassrooms() {
        return this.http
            .get<{ [key: string]: Classroom }>(
                'http://localhost:8080/classrooms'
            )
            .pipe(
                map(responseData => {
                    const classromsArray: Classroom[] = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            classromsArray.push({ ...responseData[key], id: key });
                        }
                    }
                    return classromsArray;
                })
            );
    }
}