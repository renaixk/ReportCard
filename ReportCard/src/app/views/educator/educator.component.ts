import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, ParentService, AuthenticationService, UserService, StudentService, EducatorService } from '../../services'
import { Parent, User, StudentMarks, Educator, SchoolClass, SSubject, Grade } from 'src/app/models';
import { Subscription } from 'rxjs';


@Component({selector: 'app-educator',
            templateUrl: 'educator.component.html'})
export class EducatorComponent implements OnInit {
    @Input() page?: string;
    @Output() reload = new EventEmitter();

    educatorForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    educator: Educator;
    classes: SchoolClass[] = [];
    selectedUser: User;
    studentMarks: StudentMarks[];
    teacher: Educator;
    class: SchoolClass;

    currentUser: User;
    currentUserSubscription: Subscription;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private educatorsService: EducatorService,
        private alertService: AlertService,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private studentService: StudentService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
            educatorsService.getEducatorDetails(this.currentUser.id).subscribe(educator => {
                this.educator = educator;
                this.getClassObjects(this.educator);
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

    getClassObjects(educator: Educator){
        
            this.educatorsService.getClasses(educator.id).subscribe(sclass => {               
                this.class = sclass;
                this.studentService.getStudentMarksbyClassId(this.class.Id).subscribe(stuMs=>{
                    this.studentMarks = stuMs;
                    console.log(this.studentMarks);
            });
        });
       
    }


    ngOnInit() {
       
    }

    // convenience getter for easy access to form fields
    get f() { return this.educatorForm.controls; }

   
}