import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { GaleryPageComponent } from './pages/galery-page/galery-page.component';
import { WorkshopPageComponent } from './pages/workshop-page/workshop-page.component';
import { RentPageComponent } from './pages/rent-page/rent-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { RulesPageComponent } from './pages/rules-page/rules-page.component';
import { DiyPageComponent } from './pages/diy-page/diy-page.component';
import { MembershipsPageComponent } from './pages/memberships-page/memberships-page.component';
import { CookiePolicyPageComponent } from './pages/cookie-policy-page/cookie-policy-page.component';

const routes: Routes = [
  {
    path: '',
    component: IndexPageComponent,
  },
  {
    path: 'galeria',
    component: GaleryPageComponent,
  },
  {
    path: 'talleres',
    component: WorkshopPageComponent,
  },
  {
    path: 'alquiler',
    component: RentPageComponent,
  },
  {
    path: 'eventos',
    component: EventsPageComponent,
  },
  {
    path: 'contacto',
    component: ContactPageComponent,
  },
  {
    path: 'normas',
    component: RulesPageComponent,
  },
  {
    path: 'socios',
    component: MembershipsPageComponent,
  },
  {
    path: 'bricosado',
    component: DiyPageComponent,
  },
  {
    path: 'politica-de-cookies',
    component: CookiePolicyPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
