import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/reducers/user.reducer';
import { offerReducer } from './store/reducers/offer.reducer';
import { GridModule, PageService, ToolbarService, EditService } from '@syncfusion/ej2-angular-grids';
// import { counterReducer } from './store/reducers/user.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LandingPageModule,
    CoreModule,
    GridModule,
    StoreModule.forRoot({
      user: userReducer,
      offer: offerReducer
      // count: counterReducer
    }),
  ],
  providers: [
    PageService,
    ToolbarService,
    EditService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
