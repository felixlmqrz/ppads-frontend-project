import { Attendance } from "./attendance.model";
import { Subject } from "./subject.model";

export class Lesson {
    public id: string;
    public lessonDate: Date;
    public subject: Subject;
    public attendances: Attendance[];

    constructor(id: string, lessonDate: Date, subject: Subject, attendances: Attendance[]) {
        this.id = id;
        this.lessonDate = lessonDate;
        this.attendances = attendances;
    }
}