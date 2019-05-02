import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService, UserService, StudentService, PrincipalService } from '../../services'
import { User, StudentMarks, SSubject, Grade } from 'src/app/models';
import { Subscription } from 'rxjs';


@Component({selector: 'app-principal',
            templateUrl: 'principal.component.html'})
export class PrincipalComponent implements OnInit {
    @Input() page?: string;
    @Output() reload = new EventEmitter();

    principalForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    teachers: User[] = [];
    selectedUser: User;
    studentMarks: StudentMarks[];

    currentUser: User;
    currentUserSubscription: Subscription;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private principal: PrincipalService,
        private alertService: AlertService,
        private authenticationService: AuthenticationService,
        private studentService: StudentService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
            principal.getEducators().subscribe(educs => {
                this.teachers = educs;
               
            });
        });
       
        
    }
    getSubject(val:SSubject){
        //var enumNum = SSubject.two;
        var SSubjectAsString = SSubject[val];
        return SSubjectAsString;
    }

    getGrade(val:Grade){
        //var enumNum = SSubject.two;
        var GradeAsString = Grade[val];
        return GradeAsString;
    }

    OnSelectUser(event) {
      
       this.studentService.getStudentMarksbyTeacherId(this.selectedUser.id).subscribe(stuMs=>{
        this.studentMarks = stuMs;
        console.log('studentMarks');
        console.log(this.studentMarks);
        
       });
      }

    ngOnInit() {
       
    }

}