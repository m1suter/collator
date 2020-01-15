import { Time } from '@angular/common';

//all the information on the workout
export interface Workout {
    uid: string;
    participants: [];
    participantsLimit: number;
    program: string;
    startTime: number;
    date: Date;
    duration: number;
    coach: string;
    description: string;
    title: string;
}