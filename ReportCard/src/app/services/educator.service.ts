import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User, Educator, SchoolClass } from '../models';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class EducatorService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }


    getEducatorDetails(userId: number) {
        return this.http.get<Educator>(`${environment.apiUrl}/educators/${userId}`);
    }

    getClasses(educatorId: number) {
        return this.http.get<SchoolClass>(`${environment.apiUrl}/educators/getClassesByEdId/${educatorId}`);
    }

}