import { Component, OnDestroy, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';;
import { MatChipInputEvent } from '@angular/material/chips';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Offer } from '../../../core/models/offer.model';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { UserSessionInfos } from 'src/app/core/models/user.model';
import { Subject } from 'rxjs';
import { addOffer } from 'src/app/store/actions/offer.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.scss']
})


export class NewOfferComponent implements OnInit, OnDestroy {

  minDate: Date = new Date();
  missions: string[] = [];
  profiles: string[] = [];

  newOfferForm!: FormGroup;
  formInfos$!: Observable<Offer>;
  isValid: boolean = false;
  offers!: Offer[];
  id!: number;
  userSessionInfos!: UserSessionInfos;
  private destroy$!: Subject<boolean>;
  offer!: Offer;

  constructor(private formBuilder: FormBuilder, private store: Store<{offer: Offer[], user: UserSessionInfos}>, private router: Router) {

  }

  ngOnInit(): void {
    this.newOfferForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      position: [null, [Validators.required]],
      field: [null, [Validators.required]],
      work_style: [null, [Validators.required]],
      contract: [null, [Validators.required]],
      deadline: [null, [Validators.required]],
      complementary_infos: [null]
    });

    this.destroy$ = new Subject<boolean>();

    this.store.select('user').pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(value => this.userSessionInfos = value);

    this.store.select('offer')
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(value => {
      this.offers = value;
      this.id = value.length;
    }
    );

    this.newOfferForm.valueChanges.pipe(
      map(value => ({
        id: this.id,
        title: value.title,
        position: value.position,
        field: value.field,
        work_style: value.work_style,
        contract: value.contract,
        missions: this.missions,
        profile: this.profiles,
        deadline: value.deadline,
        complementary_infos: value.complementary_infos,
        creatorId: this.userSessionInfos.id
      })),
      tap(value => this.isValid = this.validateProfiles() && this.validateMissions()),
      takeUntil(this.destroy$)
    )
    .subscribe(value => this.offer=value);
  }


  addOnBlurMission = true;
  readonly separatorKeysCodesMission = [ENTER, COMMA] as const;

  addMission(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.missions.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeMission(mission: string): void {
    const index = this.missions.indexOf(mission);

    if (index >= 0) {
      this.missions.splice(index, 1);
    }
  }

  validateMissions(){
    if(this.missions.length!==0){
      return true;
    } else{
      return false;
    }
  }

  addOnBlurProfile = true;
  readonly separatorKeysCodesProfile = [ENTER, COMMA] as const;

  addProfile(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.profiles.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeProfile(profile: string): void {
    const index = this.profiles.indexOf(profile);

    if (index >= 0) {
      this.profiles.splice(index, 1);
    }
  }

  validateProfiles(){
    if(this.profiles.length!==0){
      return true;
    } else{
      return false;
    }
  }

  onSubmitForm(): void{
    this.store.dispatch(addOffer({offer: this.offer}));
    this.router.navigateByUrl(`/liavart/main-page/${this.id}`);
  }

  ngOnDestroy(): void{
    this.destroy$.next(true);
  }
}
