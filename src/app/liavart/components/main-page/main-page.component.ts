import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { map, tap, takeUntil } from 'rxjs/operators';
import { UserSessionInfos } from 'src/app/core/models/user.model';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  url$!: Observable<UrlSegment[]>;
  userSessionInfos!: UserSessionInfos;
  destroy$!: Subject<boolean>;

  sessionInfos$!: Observable<UserSessionInfos>;
  constructor(private store: Store<{user: UserSessionInfos}>, private route: ActivatedRoute, public dialog: MatDialog) {
    this.destroy$ = new Subject<boolean>();
    this.store.select('user').pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(user => {
      this.userSessionInfos=user;
      this.destroy$.next(true);
    });
    if(this.route.snapshot.params['id']==-1){
      this.dialog.open(WelcomeComponent, {data: {userName: this.userSessionInfos.userName}});
    }
  }

  ngOnInit(): void {
    this.url$ = this.route.url.pipe(
      tap(value => console.log(value))
    );
  }

}
