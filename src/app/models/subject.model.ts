import { Classroom } from "./classroom.model";

export class Subject {
    public id: string;
    public subjectName: string;
    public classroom: Classroom;

    constructor(id: string, subjectName: string, classroom: Classroom) {
        this.id = id;
        this.subjectName = subjectName;
        this.classroom = classroom;
    }
}