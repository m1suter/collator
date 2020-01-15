import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import {
    AngularFirestore, DocumentReference, fromRef
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map,} from 'rxjs/operators';
import { Workout } from 'src/app/models/workout.model';

interface WorkoutFire {
    uid: DocumentReference;
    participants: [];
    participantsLimit: number;
    program: DocumentReference;
    startTime: firebase.firestore.Timestamp;
    date: firebase.firestore.Timestamp;
    duration: firebase.firestore.Timestamp;
    coach: DocumentReference;
    description: string;
    title: string;
}

@Injectable({providedIn: 'root'})
export class WorkoutService {
    dbName = 'workouts';

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router
    ) {
    }

    loadWorkouts():Observable<Workout[]>{
        return this.afs.collection<WorkoutFire>(this.dbName).valueChanges()
            .pipe(
                map(fireWorkouts => 
                    fireWorkouts.map(fireWorkout => {
                        return this.convertToWorkout(fireWorkout);
                    })
                )
            )
    }

    getWorkoutOfTheDay():Observable<Workout> {
        console.log("getting workoutOFTheDay");
       return this.afs.collection<WorkoutFire>(this.dbName,
            ref => ref.orderBy('date').orderBy('startTime').startAt(Date.now()).limit(1)).valueChanges()
            .pipe(
                map((fireworkouts) => {
                    return this.convertToWorkout(fireworkouts[0]);
                })
            );
    }

    editWorkout(uid, workout: Workout) {
        return this.afs.collection(this.dbName).doc(uid).set(workout);
    }

    deleteWorkout(uid: string) {
        return this.afs.collection(this.dbName).doc(uid).delete();
    } 

    createWorkout(workout: Workout) {
        return this.afs.collection(this.dbName).add(workout);
    }

    convertToWorkout(wod:WorkoutFire): Workout{
            const data = {
                uid: wod.uid.path,
                participants: wod.participants,
                participantsLimit: wod.participantsLimit,
                program: wod.program.path,
                startTime: wod.startTime.toDate().getTime(),
                date: wod.date.toDate(),
                duration: wod.duration.toDate().getTime(),
                coach: wod.coach.path,
                description: wod.description,
                title: wod.title
            }
            return Object.assign({}, data) as Workout;
    }
}