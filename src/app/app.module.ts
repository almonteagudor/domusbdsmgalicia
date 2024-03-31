import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { GaleryPageComponent } from './pages/galery-page/galery-page.component';
import { WorkshopPageComponent } from './pages/workshop-page/workshop-page.component';
import { RentPageComponent } from './pages/rent-page/rent-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { RulesPageComponent } from './pages/rules-page/rules-page.component';
import { MembershipsPageComponent } from './pages/memberships-page/memberships-page.component';
import { DiyPageComponent } from './pages/diy-page/diy-page.component';
import { CookiePolicyPageComponent } from './pages/cookie-policy-page/cookie-policy-page.component';
import { NgOptimizedImage } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule(
  {
    declarations: [
      AppComponent,
      IndexPageComponent,
      GaleryPageComponent,
      WorkshopPageComponent,
      RentPageComponent,
      EventsPageComponent,
      ContactPageComponent,
      RulesPageComponent,
      MembershipsPageComponent,
      DiyPageComponent,
      CookiePolicyPageComponent,
      NavbarComponent,
    ],
    imports: [
      AppRoutingModule,
      BrowserModule,
      MaterialModule,
      NgOptimizedImage,
    ],
    providers:    [
      provideAnimationsAsync(),
    ],
    bootstrap:    [AppComponent],
  },
)
export class AppModule {
}
