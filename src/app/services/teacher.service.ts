import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Teacher } from "../models/teacher.model";

@Injectable({ providedIn: "root" })
export class TeacherService {
    constructor(private http: HttpClient) { }

    fetchTeachers() {
        return this.http
            .get<{ [key: string]: Teacher }>(
                'http://localhost:8080/teachers'
            )
            .pipe(
                map(responseData => {
                    const teachersArray: Teacher[] = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            teachersArray.push({ ...responseData[key], id: key });
                        }
                    }
                    return teachersArray;
                })
            );
    }
}