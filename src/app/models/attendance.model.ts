import { Student } from "./student.model";

export class Attendance {
    public student: Student;
    public presence: boolean;

    constructor(student: Student, presence: boolean) {
        this.student = student;
        this.presence = presence;
    }
}