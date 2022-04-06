import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  destroy$!: Subject<boolean>;
  isAuthenticated!: boolean;
    constructor(private authService: AuthService, private store: Store<{user: User}>, private router: Router) {

      this.destroy$ = new Subject<boolean>();

      this.store.select('user').pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(user =>{
        this.isAuthenticated = (user.id!==-1) ? true : false;
        if(this.isAuthenticated==false){
          this.router.navigateByUrl('/liavart/landing-page');
        }
        this.destroy$.next(true);
      })

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.isAuthenticated){
            return true;
        } else{
            return false;
        }
    }
}
