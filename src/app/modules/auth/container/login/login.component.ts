import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromSelectors from 'src/app/store/reducers';
import * as loginActions from 'src/app/store/actions/login.actions';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  
  constructor(private store:Store<fromSelectors.State>) { 
  }

  ngOnInit() {
    this.store.pipe(take(1)).subscribe(v => console.log(v));
  }

  login() : void {
    this.store.dispatch(loginActions.login({username: this.username, password: this.password}));
    this.store.pipe(take(1)).subscribe(v => console.log(v));
  }
}
