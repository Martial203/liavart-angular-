import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LiavartRoutingModule } from "./liavart-routing.module";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NewOfferComponent } from './components/new-offer/new-offer.component';
import { OffersListComponent } from './components/offers-list/offers-list.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SingleOfferComponent } from './components/single-offer/single-offer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    LandingPageComponent,
    RegistrationComponent,
    MainPageComponent,
    NewOfferComponent,
    OffersListComponent,
    SingleOfferComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    LiavartRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ]
})
export class LiavartModule { }
