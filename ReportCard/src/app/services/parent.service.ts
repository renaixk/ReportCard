import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User, Parent } from '../models';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ParentService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }


    getParentDetails(userId: number) {
        return this.http.get<Parent>(`${environment.apiUrl}/parents/${userId}`);
    }

}