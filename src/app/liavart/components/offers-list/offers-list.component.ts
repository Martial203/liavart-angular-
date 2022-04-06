import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Offer } from 'src/app/core/models/offer.model';
import { InfiniteScrollService } from '@syncfusion/ej2-angular-grids';
import { PageSettingsModel, InfiniteScrollSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
  providers: [InfiniteScrollService]
})
export class OffersListComponent implements OnInit {

  offers$!: Observable<Offer[]>;
  id$!: Observable<{id: number, imageUrl: string}>;
  // url$!: Observable

  constructor(private store: Store<{offer: Offer[]}>,private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.offers$ = this.store.select('offer');
    console.log(this.offers$);
    this.id$ = this.route.params.pipe(
      map(value => ({id: value['id'], imageUrl: (value['id']%2==1) ? "assets/icon.png" : "/assets/blankProfilePicture.png"}))
    );
  }

  getOfferId(): number{
    const id = this.route.snapshot.params['id'];
    console.log(id);
    return id;
  }

  onScrollDown(event: any): void {
    console.log("scrolled down");
  }

  getImageUrl(offer: Offer): string{
    const user = this.userService.getAUserById(offer.creatorId);
    return user.avatar;
  }

  onAddButton(): void{
    this.router.navigateByUrl('/liavart/main-page/new-offer');
  }

}
