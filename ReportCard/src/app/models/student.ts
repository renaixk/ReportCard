import { SSubject } from './subject';
import { Grade } from './grade.enum';

export class Student {
    Id: number;
    Grade: Grade;
    Subjects: SSubject[];
    UserId: number;
    fullname: string;

    constructor (id: number, grade: Grade, userId: number, fullname: string) {  
       this.Id = id;
        this.Grade = grade;
        this.UserId = userId;
        this.fullname = fullname;
       }
}