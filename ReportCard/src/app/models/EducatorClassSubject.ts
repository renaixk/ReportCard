import { SSubject } from './subject';
export class EducatorClassSubject{
    EducatorId: number;
    ClassID: number;
    SubjectId: SSubject;

    constructor(educatorId: number, classId: number,subject: SSubject ){
        this.EducatorId = educatorId;
        this.ClassID = classId;
        this.SubjectId = subject;
    }
}