import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../../../core/services/auth.service";
import { Router } from "@angular/router";
import { UserService } from 'src/app/core/services/user.service';
import { Observable } from 'rxjs/internal/Observable';
import { UserSessionInfos } from 'src/app/core/models/user.model';
import { Store } from '@ngrx/store';
import { setSessionInfos } from 'src/app/store/actions/user.action';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  userName!: string;
  password!: string;

  userInfos$!: Observable<UserSessionInfos>;

  onSubmit(form: NgForm){
    console.log(form.value);
  }
  constructor(private authService: AuthService, private router: Router, private userService: UserService, private store: Store<{user: UserSessionInfos}>) {
    // this.userInfos$ = store.select('user').pipe(
    //   tap(val => console.log('val '+val)));
  }

  ngOnInit(): void {
  }

  onLogin(){
    const index = this.authService.authenticate(this.userName, this.password);
    if(index!==-1){
      this.store.dispatch(setSessionInfos({user: {id:1, userName: this.userName}}));
      this.router.navigateByUrl('/liavart/main-page/');
    } else{
      // this.store.dispatch(setSessionInfos({user:{id: 1, userName: this.userName}}));
      // this.router.navigateByUrl('/liavart');
    }
  }
}
