import { Student } from './student';

export class Parent {
    Id: number;
    Children: Student[] = [];
    UserId: number;

    constructor (id: number, userId: number) {  
        this.Id = id;
        
        this.UserId = userId;
       }
}