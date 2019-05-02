import {Grade} from './grade.enum';
import { SSubject } from './subject';

export class GradeSubject{
    Id: number;
    Grade: Grade;
    SSubjectId: SSubject

    constructor(id: number, grade: Grade, subjectId: SSubject){
        this.Id = id;
        this.Grade = grade;
        this.SSubjectId = subjectId;
    }
}