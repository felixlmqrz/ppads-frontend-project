import { Classroom } from "./classroom.model";

export class Student {
    public id: string;
    public studentName: string;
    public classroom: Classroom;

    constructor(id: string, studentName: string, classroom: Classroom) {
        this.id = id;
        this.studentName = studentName;
        this.classroom = classroom;
    }
}
