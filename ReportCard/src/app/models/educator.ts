import {Grade} from './grade.enum';

export class Educator{
    id: number;
    userId: number;  
    fullname: string;


    constructor(id: number, userId: number, fullname:string){
        this.id = id;
        this.userId = userId;
        this.fullname = fullname;
    }
}