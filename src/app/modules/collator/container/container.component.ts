import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from 'src/app/store/reducers'
import * as fromLogin from 'src/app/store/actions/login.actions';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<fromRoot.State>,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.store.select(fromRoot.isLogedIn).subscribe(b => console.log("logedIn: "+ b));
  }

  logout() {
    this.store.dispatch(fromLogin.logout());
  }

}
