import { Subject } from "./subject.model";

export class Teacher {
    public id: string;
    public teacherName: string;
    public subject: Subject;

    constructor(id: string, teacherName: string, subject: Subject) {
        this.id = id;
        this.teacherName = teacherName;
        this.subject = subject;
    }
}
