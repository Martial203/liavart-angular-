import { Component, Input, OnInit } from '@angular/core';
import { Offer } from 'src/app/core/models/offer.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-single-offer',
  templateUrl: './single-offer.component.html',
  styleUrls: ['./single-offer.component.scss']
})
export class SingleOfferComponent implements OnInit {

  @Input() offer!: Offer;
  @Input() imageUrl!: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const user = this.userService.getAUserById(this.offer.creatorId);
    // this.imageUrl = (user) ? user.avatar : "/assets/blankProfilePicture.png";
  }

}
