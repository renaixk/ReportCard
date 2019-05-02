import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User, Educator } from '../models';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class PrincipalService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    getEducators() {
        return this.http.get<User[]>(`${environment.apiUrl}/principal`);
    }

}