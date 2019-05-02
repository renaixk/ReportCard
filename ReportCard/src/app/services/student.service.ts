import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User, Parent, StudentMarks } from '../models';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class StudentService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    getStudentMarks(studentId: number) {
        return this.http.get<StudentMarks[]>(`${environment.apiUrl}/students/${studentId}`);
    }

    getStudentMarksbyClassId(classId: number) {
        return this.http.get<StudentMarks[]>(`${environment.apiUrl}/students/getByClassId/${classId}`);
    }

    getStudentMarksbyTeacherId(teacherId: number) {
        return this.http.get<StudentMarks[]>(`${environment.apiUrl}/students/getByTeacherId/${teacherId}`);
    }

    

}