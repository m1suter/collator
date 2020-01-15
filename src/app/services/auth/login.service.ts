import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import {
    AngularFirestore
} from '@angular/fire/firestore';

import { Observable, of, from } from 'rxjs';
import { map, catchError, tap} from 'rxjs/operators';
import { Person } from 'src/app/models/person.model';

@Injectable({providedIn:"root"})
export class LoginService {
    user$: Observable<Person>

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router
    ) {
        this.user$ = this.updateUserData(this.afAuth.authState);
    }

    signUp(email: string, password: string): Observable<Person> {
        return from(this.afAuth.auth.createUserWithEmailAndPassword(email, password))
            .pipe(
                map(credential => credential.user),
                tap(user => {
                    return this.updateUserData(user);
                }),
                catchError((error, obs) => {
                    return of(null);
                })
            )
    }

    login(email:string, password:string): Observable<Person>{
         return from(this.afAuth.auth.signInWithEmailAndPassword(email, password))
            .pipe(
                map(credential => credential.user),
                tap(user => {
                    this.user$ = this.updateUserData(user);
                    return this.updateUserData(user);
                }),
                catchError((error, obs) => {
                    this.user$ = of(null);
                    return of(null);
                })
            )
    }

    logout(): Observable<Person> {
        this.afAuth.auth.signOut();
        this.user$ = of(null);
        return this.user$;
    }

    updateUserData(user):Observable<Person> {
        if(user) {
            return this.afs.doc<Person>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
    }
}