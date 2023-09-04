import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { MessagePageComponent } from './pages/message-page/message-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'message', component: MessagePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
