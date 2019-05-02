import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, ParentService, AuthenticationService, UserService, StudentService } from '../../services'
import { Parent, User, StudentMarks, Educator, SchoolClass, SSubject, Grade } from 'src/app/models';
import { Subscription } from 'rxjs';


@Component({selector: 'app-parent',
            templateUrl: 'parent.component.html'})
export class ParentComponent implements OnInit {
    @Input() page?: string;
    @Output() reload = new EventEmitter();

    childrenForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    parent: Parent;
    children: User[] = [];
    selectedUser: User;
    studentMarks: StudentMarks[];
    teacher: Educator;
    class: SchoolClass;
    subject: SSubject;

    currentUser: User;
    currentUserSubscription: Subscription;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private parentService: ParentService,
        private alertService: AlertService,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private studentService: StudentService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
            parentService.getParentDetails(this.currentUser.id).subscribe(parent => {
                this.parent = parent;
                console.log('Parent');
                console.log(parent);
                this.getChildrenUserObjects(this.parent);
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

    getChildrenUserObjects(parent: Parent){
        
        parent.Children.forEach(element => {
            this.userService.getById(element.UserId).subscribe(student => {               
                this.children.push(student);
                console.log('children');
                console.log(this.children);
            })
        });
    }

    OnSelectUser(event) {
       console.log('user selected');
       console.log(this.selectedUser);
       this.studentService.getStudentMarks(this.selectedUser.id).subscribe(stuMs=>{
        this.studentMarks = stuMs;
        console.log('student Marks');
        console.log(this.studentMarks);
        
       });
      }

    ngOnInit() {
       
    }

    // convenience getter for easy access to form fields
    get f() { return this.childrenForm.controls; }

   
}