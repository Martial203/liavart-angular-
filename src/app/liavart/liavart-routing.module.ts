import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuard } from '../core/guards/auth.guards';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'login', component: LandingPageComponent },
    { path: 'sign-in', component: RegistrationComponent },
    { path: 'main-page', component: MainPageComponent, canActivate: [AuthGuard] },
    // { path: 'main-page/offers-list', component: MainPageComponent, canActivate: [AuthGuard] },
    // { path: 'main-page/offers-list/:id', component: MainPageComponent, canActivate: [AuthGuard] },
    { path: 'main-page/:id', component: MainPageComponent, canActivate: [AuthGuard] },
    { path: 'main-page/new-offer', component: MainPageComponent, canActivate: [AuthGuard] }

  ];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class LiavartRoutingModule {}
