import { Grade } from './grade.enum';
import { Student } from './student';

export class SchoolClass{
    Id: number;
    Grade: Grade;
    Name: string;
    Students: Student[] = [];
    SchoolLevelDesignation: string;
    ClassEducatorId: number;

    constructor (id: number, grade: Grade, name: string, designation: string, educatorId: number){
        this.Id = id;
        this.Grade= grade;
        this.Name = name;
        this.SchoolLevelDesignation = designation;
        this.ClassEducatorId = educatorId;
    }
}