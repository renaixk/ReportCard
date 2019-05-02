import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { User, Principal, Educator, SSubject, SchoolClass, EducatorClassSubject, Parent, role, Student, Grade, GradeSubject, StudentMarks } from '../models';
import { IfStmt } from '@angular/compiler';


@Injectable({ providedIn: 'root' })
export class MockInitializer {
    private newUser: User;
    private newPrincipal: Principal;
    private newEducator: Educator;
    private newClass: SchoolClass;
    private newEducatorClassSubject: EducatorClassSubject;
    private newParent: Parent;
    private newStudent: Student;
    private newGradeSubject: GradeSubject;
    private newStudentMarks: StudentMarks;

    private users: any[] = [];

    
    constructor() {
        
    }
    private initializeGradeSubjects(){
        let subjects: any[] = [];
        let gradeSubjects: any[] = [];
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade One"], SSubject.English);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Two"], SSubject.English);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Three"], SSubject.English);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Four"], SSubject.English);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Five"], SSubject.English);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Six"], SSubject.English);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Seven"], SSubject.English);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eight"], SSubject.English);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Nine"], SSubject.English);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Ten"], SSubject.English);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eleven"], SSubject.English);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Twelve"], SSubject.English);
        gradeSubjects.push(this.newGradeSubject);

       
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade One"], SSubject.Math);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Two"], SSubject.Math);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Three"], SSubject.Math);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Four"], SSubject.Math);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Five"], SSubject.Math);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Six"], SSubject.Math);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Seven"], SSubject.Math);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eight"], SSubject.Math);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Nine"], SSubject.Math);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Ten"], SSubject.Math);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eleven"], SSubject.Math);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Twelve"], SSubject.Math);
        gradeSubjects.push(this.newGradeSubject);

        
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade One"], SSubject.LifeSkills);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Two"], SSubject.LifeSkills);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Three"], SSubject.LifeSkills);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Four"], SSubject.LifeSkills);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Five"], SSubject.LifeSkills);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Six"], SSubject.LifeSkills);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Seven"], SSubject.LifeSkills);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eight"], SSubject.LifeSkills);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Nine"], SSubject.LifeSkills);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Ten"], SSubject.LifeSkills);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eleven"], SSubject.LifeSkills);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Twelve"], SSubject.LifeSkills);
        gradeSubjects.push(this.newGradeSubject);

        
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade One"], SSubject.Zulu);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Two"], SSubject.Zulu);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Three"], SSubject.Zulu);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Four"], SSubject.Zulu);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Five"], SSubject.Zulu);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Six"], SSubject.Zulu);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Seven"], SSubject.Zulu);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eight"], SSubject.Zulu);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Nine"], SSubject.Zulu);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Ten"], SSubject.Zulu);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eleven"], SSubject.Zulu);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Twelve"], SSubject.Zulu);
        gradeSubjects.push(this.newGradeSubject);

        
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade One"], SSubject.Afrikaans);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Two"], SSubject.Afrikaans);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Three"], SSubject.Afrikaans);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Four"], SSubject.Afrikaans);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Five"], SSubject.Afrikaans);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Six"], SSubject.Afrikaans);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Seven"], SSubject.Afrikaans);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eight"], SSubject.Afrikaans);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Nine"], SSubject.Afrikaans);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Ten"], SSubject.Afrikaans);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eleven"], SSubject.Afrikaans);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Twelve"], SSubject.Afrikaans);
        gradeSubjects.push(this.newGradeSubject);

        
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade One"], SSubject.PE);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Two"], SSubject.PE);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Three"], SSubject.PE);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Four"], SSubject.PE);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Five"], SSubject.PE);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Six"], SSubject.PE);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Seven"], SSubject.PE);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eight"], SSubject.PE);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Nine"], SSubject.PE);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Ten"], SSubject.PE);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eleven"], SSubject.PE);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Twelve"], SSubject.PE);
        gradeSubjects.push(this.newGradeSubject);

               
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eight"], SSubject.History);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Nine"], SSubject.History);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Ten"], SSubject.History);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eleven"], SSubject.History);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Twelve"], SSubject.History);
        gradeSubjects.push(this.newGradeSubject);

              
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eight"], SSubject.Geography);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Nine"], SSubject.Geography);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Ten"], SSubject.Geography);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eleven"], SSubject.Geography);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Twelve"], SSubject.Geography);
        gradeSubjects.push(this.newGradeSubject);

               
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eight"], SSubject.Accounting);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Nine"], SSubject.Accounting);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Ten"], SSubject.Accounting);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eleven"], SSubject.Accounting);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Twelve"], SSubject.Accounting);
        gradeSubjects.push(this.newGradeSubject);

              
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eight"], SSubject.Physics);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Nine"], SSubject.Physics);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Ten"], SSubject.Physics);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eleven"], SSubject.Physics);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Twelve"], SSubject.Physics);
        gradeSubjects.push(this.newGradeSubject);

               
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eight"], SSubject.Biology);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Nine"], SSubject.Biology);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Ten"], SSubject.Biology);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eleven"], SSubject.Biology);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Twelve"], SSubject.Biology);
        gradeSubjects.push(this.newGradeSubject);

              
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eight"], SSubject["Computer Literacy"]);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Nine"], SSubject["Computer Literacy"]);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Ten"], SSubject["Computer Literacy"]);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Eleven"], SSubject["Computer Literacy"]);
        gradeSubjects.push(this.newGradeSubject);
        this.newGradeSubject = new GradeSubject(gradeSubjects.length+1, Grade["Grade Twelve"], SSubject["Computer Literacy"]);
        gradeSubjects.push(this.newGradeSubject);

        localStorage.setItem('gradeSubjects', JSON.stringify(gradeSubjects));
        localStorage.setItem('subjects', JSON.stringify(subjects));
    }
    initializeMockData(){
        this.initializeGradeSubjects();        

        this.newUser = new User();


        this.newUser.id = this.users.length + 1;
        this.newUser.firstName = "Renaix";
        this.newUser.lastName = "Kabuya";
        this.newUser.password = "test";
        this.newUser.role = role.Principal
        this.newUser.username = "krenaix";
        this.users.push(this.newUser);

        //add Principal data
        this.newPrincipal = new Principal();
        this.newPrincipal.id = 1;
        this.newPrincipal.userId = this.newUser.id;
        localStorage.setItem('principal', JSON.stringify(this.newPrincipal));

        let educatorFirstNames: string[] = [];
        educatorFirstNames.push("King");
        educatorFirstNames.push("Natsu");

        let educatorLastNames: string[] = [];
        educatorLastNames.push('Kai');
        educatorLastNames.push('Dragneel');

        let educatorSubject: SSubject[] = [];
        educatorSubject.push(SSubject.Math);
        educatorSubject.push(SSubject.English);

        this.initializeEducators(educatorFirstNames,educatorLastNames);
        this.intializeParents();

        this.intializeEducatorSubjects(educatorSubject);

        this.assignStudentToClass();

        localStorage.removeItem('users');
        localStorage.setItem('users', JSON.stringify(this.users));
        console.log(this.users);
    }

    private initializeStudents(count: number, grades: Grade[], parent:Parent, firstnames: string[], lastname:string){
        let students = JSON.parse(localStorage.getItem('students')) || [];
       

        for(let i: number = 0; i<count;i++){
            if(grades.length > 1){
                this.newUser = new User();
                this.newUser.id = this.users.length + 1;
                this.newUser.firstName = firstnames[i];
                this.newUser.lastName = lastname;
                this.newUser.password = "test";
                this.newUser.role = role.Student;
                this.newUser.username = firstnames[i];   
                this.users.push(this.newUser);

                this.newStudent = new Student(students.length+1, grades[i],this.newUser.id,this.newUser.firstName+' '+this.newUser.lastName);
                students.push(this.newStudent);

                parent.Children.push(this.newStudent);

            }
            else{
                this.newUser = new User();
                this.newUser.id = this.users.length + 1;
                this.newUser.firstName = firstnames[i];
                this.newUser.lastName = lastname;
                this.newUser.password = "test";
                this.newUser.role = role.Student;
                this.newUser.username = firstnames[i];   
                this.users.push(this.newUser);

                this.newStudent = new Student(students.length+1, grades[0],this.newUser.id, this.newUser.firstName+' '+this.newUser.lastName);
                students.push(this.newStudent);

                parent.Children.push(this.newStudent);
            }
        }
        localStorage.removeItem('students');
        localStorage.setItem('students', JSON.stringify(students));
    }
    private intializeParents()
    {
        let grades: any[] = [];
        let parents: any[] = [];
        let names: string[] = [];
         //add a Parent
         this.newUser = new User();
         this.newUser.id = this.users.length + 1;
         this.newUser.firstName = "Goku";
         this.newUser.lastName = "Son";
         this.newUser.password = "test";
         this.newUser.role = role.Parent;
         this.newUser.username = "Kakarot";   
         this.users.push(this.newUser);
        
         this.newParent = new Parent(parents.length + 1, this.newUser.id);
        
        names.push('Gohan');
        names.push('Goten');
         grades.push(Grade["Grade Five"]);
         grades.push(Grade["Grade Ten"]);

         this.initializeStudents(2,grades, this.newParent, names, this.newUser.lastName);
         parents.push(this.newParent);

         //add another parent
         this.newUser = new User();
         this.newUser.id = this.users.length + 1;
         this.newUser.firstName = "Saitama";
         this.newUser.lastName = "Sensei";
         this.newUser.password = "test";
         this.newUser.role = role.Parent;
         this.newUser.username = "OnePunchMan";   
         this.users.push(this.newUser);
        
         this.newParent = new Parent(parents.length + 1, this.newUser.id);
        
        grades = [];
        names = [];

        names.push('Genus');
         grades.push(Grade["Grade Five"]);
         this.initializeStudents(1,grades, this.newParent, names, this.newUser.lastName);
         parents.push(this.newParent);

         localStorage.removeItem('parents');
         localStorage.setItem('parents', JSON.stringify(parents));
    }

    private initializeClasses(grade: Grade, designation:number, educatorId: number, className:string){
        let classes: SchoolClass[] = JSON.parse(localStorage.getItem('classes')) || [];
        let exists: boolean = false;
        
        let level = designation > 7? 'High School' : 'Primary School';
        this.newClass = new SchoolClass(classes.length + 1, grade, className, level, educatorId);
        classes.push(this.newClass);

        localStorage.removeItem('classes');
        localStorage.setItem('classes', JSON.stringify(classes));
    }

    private initializeEducators(educatorFirstNames: string[], educatorLastNames: string[]){
        let educators: any[] = [];
        let educatorGrades: Grade[] = [];
        educatorGrades.push(Grade["Grade Five"]);
        educatorGrades.push(Grade["Grade Ten"]);

        for(let i: number=0; i<educatorFirstNames.length; i++){
            let edu: Educator;
            let neUser = new User();
            neUser.id = this.users.length + 1;
            neUser.firstName = educatorFirstNames[i];
            neUser.lastName = educatorLastNames[i];
            neUser.password = "test";
            neUser.role = role.Educator;
            neUser.username = educatorFirstNames[i];   
            this.users.push(neUser);

            edu = new Educator(educators.length + 1, neUser.id, neUser.firstName+' '+neUser.lastName);
            educators.push(edu); 

            this.initializeClasses(educatorGrades[i],educatorGrades[i],edu.id, educatorGrades[i].toString()+' A');
        }
        localStorage.removeItem('educators');
        localStorage.setItem('educators', JSON.stringify(educators));
    }

    private intializeEducatorSubjects(subjects:SSubject[]){
        let educatorClassSubjects: any[] = [];
        let classes: SchoolClass[] = JSON.parse(localStorage.getItem('classes'));
        let eductors: any[] = JSON.parse(localStorage.getItem('educators'));
        let index = 0;
        classes.forEach(sclass => {
            this.newEducatorClassSubject = new EducatorClassSubject(sclass.ClassEducatorId, sclass.Id, subjects[index]);
            index++;
            educatorClassSubjects.push(this.newEducatorClassSubject);
        });       
        console.log('classess');
        console.log(classes);
        
        console.log('educators 3');
        console.log(eductors);

        localStorage.removeItem('educatorClassSubject');
        localStorage.setItem('educatorClassSubject', JSON.stringify(educatorClassSubjects));
    }

    private assignStudentToClass(){
        let classes: SchoolClass[] = JSON.parse(localStorage.getItem('classes'));
        let students: Student[] = JSON.parse(localStorage.getItem('students'));
        let educatorClassSubject: EducatorClassSubject[] = JSON.parse(localStorage.getItem('educatorClassSubject'));
       
        console.log('educatorClassSubject');
        console.log(educatorClassSubject);
        classes.forEach(cla =>{
            students.forEach(stu => {
                if(cla.Grade === stu.Grade){
                    cla.Students.push(stu);
                    educatorClassSubject.forEach(ecs=>{
                        if(ecs.ClassID === cla.Id){
                            this.assignStudentMarks(cla, cla.Grade, stu, ecs.SubjectId,ecs.EducatorId);
                            console.log('adding marks for:'+ecs.EducatorId);
                        }
                    });
                }
            });
        });

        let studentMarks: StudentMarks[] = JSON.parse(localStorage.getItem('studentMarks')) || [];
        console.log('student Marks');
        console.log(studentMarks);

    }
    private assignStudentMarks(sclass: SchoolClass, grade: Grade, student:Student,subject:SSubject, educatorId:number){
        let studentMarks: StudentMarks[] = JSON.parse(localStorage.getItem('studentMarks')) || [];
        let percentage: number = Math.floor(Math.random() * 90 + 10);
        let comment: string;
        let educators: Educator[] = JSON.parse(localStorage.getItem('educators')) || [];
        let educator: Educator;

        educators.forEach(ed=> {
            if(ed.id === educatorId)
            {
                educator = ed;
                console.log('educator fournd: '+ed.id);
                console.log(ed);
            }
        });

        if(percentage >= 0 && percentage <= 25 ){
            comment = 'dissapointing results';
        }
        else if(percentage >= 26 && percentage <= 50){
            comment = 'more work required';
        }
        else if(percentage >= 51 && percentage <= 75){
            comment = 'Well done, still has room for improvement';
        }
        else if(percentage >= 76)
        {
            comment = 'Excellent work!!';
        }
    
    
        this.newStudentMarks = new StudentMarks();
        this.newStudentMarks.id = studentMarks.length+1;
        this.newStudentMarks.sClass = sclass;
        this.newStudentMarks.grade = grade;
        this.newStudentMarks.percentage = percentage+'%';
        this.newStudentMarks.comments = comment;
        this.newStudentMarks.studentId = student.Id;
        this.newStudentMarks.subject = subject;
        this.newStudentMarks.subjectTeacherId = educator;
        this.newStudentMarks.student = student;
        this.newStudentMarks.classId = sclass.Id;

        console.log('studentMarks3');
        console.log(studentMarks);
        studentMarks.push(this.newStudentMarks);
        localStorage.removeItem('studentMarks');
        localStorage.setItem('studentMarks', JSON.stringify(studentMarks));

    }

}