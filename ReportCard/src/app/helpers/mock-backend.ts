import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { Parent, StudentMarks, Educator, SchoolClass, Student, role, User } from '../models';

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
        let parents: Parent[] = JSON.parse(localStorage.getItem('parents')) || [];
        let studentMarks: StudentMarks[] = JSON.parse(localStorage.getItem('studentMarks')) || [];
        let educators: Educator[] = JSON.parse(localStorage.getItem('educators')) || [];
        let classes: SchoolClass[] = JSON.parse(localStorage.getItem('classes')) || [];
        let students: Student[] = JSON.parse(localStorage.getItem('students')) || [];

        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {

            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                let filteredUsers = users.filter(user => {
                    console.log(user.username+':'+user.password);
                    return user.username === request.body.username && user.password === request.body.password;
                });

                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    let user = filteredUsers[0];
                    let body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token',
                        role: user.role
                    };

                    return of(new HttpResponse({ status: 200, body: body }));
                } else {
                    // else return 400 bad request
                    return throwError({ error: { message: 'Username or password is incorrect' } });
                }
            }

            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return of(new HttpResponse({ status: 200, body: users }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    let matchedUsers = users.filter(user => { return user.id === id; });
                    let user = matchedUsers.length ? matchedUsers[0] : null;

                    return of(new HttpResponse({ status: 200, body: user }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                let newUser = request.body;

                // validation
                let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
                if (duplicateUser) {
                    return throwError({ error: { message: 'Username "' + newUser.username + '" is already taken' } });
                }

                // save new user
                newUser.id = users.length + 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));

                // respond 200 OK
                return of(new HttpResponse({ status: 200 }));
            }

            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    for (let i = 0; i < users.length; i++) {
                        let user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }

                    // respond 200 OK
                    return of(new HttpResponse({ status: 200 }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get Parent by id
            if (request.url.match(/\/parents\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find Parent by userId in parents array
                    let urlParts = request.url.split('/');
                    let userId = parseInt(urlParts[urlParts.length - 1]);
                    let matchedParents = parents.filter(parent => { return parent.UserId === userId; });
                    let parent = matchedParents.length ? matchedParents[0] : null;
                    console.log('Parents 0');
                    console.log(parents);
                    console.log('userId');
                    console.log(userId);
                    return of(new HttpResponse({ status: 200, body: parent }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get studentMark by student id
            if (request.url.match(/\/students\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find Parent by userId in parents array
                    let urlParts = request.url.split('/');
                    let studentUserId = parseInt(urlParts[urlParts.length - 1]);
                    let studentj = students.filter(st=> {return st.UserId === studentUserId})[0];
                    let matchedStudentMarks = studentMarks.filter(studentMark => { return studentMark.studentId === studentj.Id; });
                    //let parent = matchedStudentMarks.length ? matchedStudentMarks[0] : null;

                    return of(new HttpResponse({ status: 200, body: matchedStudentMarks }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get Educator by id
            if (request.url.match(/\/educators\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find Parent by userId in parents array
                    let urlParts = request.url.split('/');
                    let userId = parseInt(urlParts[urlParts.length - 1]);
                    let matchedEducators = educators.filter(educator => { return educator.userId === userId; });
                    let edu = matchedEducators.length ? matchedEducators[0] : null;

                    return of(new HttpResponse({ status: 200, body: edu }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get Classes by Edu id
            if (request.url.includes('/educators/getClassesByEdId') && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find Parent by userId in parents array
                    let urlParts = request.url.split('/');
                    let eduId = parseInt(urlParts[urlParts.length - 1]);
                    let matchedClasses = classes.filter(sclass => { return sclass.ClassEducatorId === eduId; });
                    let sclass = matchedClasses.length ? matchedClasses[0] : null;

                    return of(new HttpResponse({ status: 200, body: sclass }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

             // get studentMarks by class id
             if (request.url.includes('/students/getByClassId') && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find Parent by userId in parents array
                    let urlParts = request.url.split('/');
                    let classId = parseInt(urlParts[urlParts.length - 1]);
                    let matchedStudentMarks = studentMarks.filter(studentMark => { return studentMark.classId === classId; });
                    console.log('students/getByClassId');
                    console.log(studentMarks);

                    return of(new HttpResponse({ status: 200, body: matchedStudentMarks }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get educators
            if (request.url.endsWith('/principal') && request.method === 'GET') {
                 if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                     let educatorUserObj: User[] = users.filter(u=> {return u.role === role.Educator});
                    return of(new HttpResponse({ status: 200, body: educatorUserObj }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get studentMarks by teacherUser id
            if (request.url.includes('/students/getByTeacherId') && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find Parent by userId in parents array
                    let urlParts = request.url.split('/');
                    
                    let teacherUserId = parseInt(urlParts[urlParts.length - 1]);
                    console.log(teacherUserId);
                    let matchedStudentMarks = studentMarks.filter(studentMark => { return studentMark.subjectTeacherId.userId === teacherUserId; });
                    console.log('students/getByTeacherId');
                    console.log(studentMarks);

                    return of(new HttpResponse({ status: 200, body: matchedStudentMarks }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // pass through any requests not handled above
            return next.handle(request);
            
        }))

        // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());
    }
}

export let mockBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: MockBackendInterceptor,
    multi: true
};