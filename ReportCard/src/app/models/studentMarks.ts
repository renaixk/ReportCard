import { SSubject } from './subject';
import { Grade } from './grade.enum';
import { SchoolClass } from './class';
import { Educator } from './educator';
import { Student } from './student';

export class StudentMarks {
    id: number;
    studentId: number;
    grade: Grade;
    subject: SSubject;
    sClass: SchoolClass;
    percentage: string;
    subjectTeacherId: Educator;
    comments: string;
    student: Student;
    classId: number;

}