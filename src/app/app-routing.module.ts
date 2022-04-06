import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageModule } from './landing-page/landing-page.module';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'liavart', loadChildren: () => import('./liavart/liavart.module').then(m => m.LiavartModule) }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        LandingPageModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
