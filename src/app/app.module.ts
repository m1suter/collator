import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestore, fromRef } from '@angular/fire/firestore';
import { Actions, EffectsModule } from '@ngrx/effects';
import * as fromRoot from 'src/app/store/reducers';
import { LoginEffects } from './store/effects/login.effect';
import { WorkoutEffects } from './store/effects/workout.effect';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    StoreModule.forRoot(fromRoot.reducers, {metaReducers: [fromRoot.clearState]}),
    EffectsModule.forRoot([LoginEffects, WorkoutEffects]),
  ],
  providers: [AngularFirestore, Actions],
  bootstrap: [AppComponent]
})
export class AppModule { }
