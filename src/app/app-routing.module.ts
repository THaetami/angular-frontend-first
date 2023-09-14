import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { MessagePageComponent } from './pages/message-page/message-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { DetailProductPageComponent } from './pages/detail-product-page/detail-product-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'product', component: ProductPageComponent },
  { path: 'product/:id', component: DetailProductPageComponent },
  { path: 'cart', component: CartPageComponent },
  {
    path: 'message', component: MessagePageComponent,
    children: [
      { path: ':username', component: ChatPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
