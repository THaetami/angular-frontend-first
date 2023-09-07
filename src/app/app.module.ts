import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { sidebarReducer } from './reducer/sidebar.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { CounterpartComponent } from './component/counterpart/counterpart.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FormLoginComponent } from './component/form-login/form-login.component';
import { SidebarAuthComponent } from './component/sidebar-auth/sidebar-auth.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ArticleComponent } from './component/article/article.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { MessagePageComponent } from './pages/message-page/message-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CardProductComponent } from './component/card-product/card-product.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SidebarComponent,
    CounterpartComponent,
    NavbarComponent,
    FormLoginComponent,
    SidebarAuthComponent,
    HomePageComponent,
    FormRegisterComponent,
    RegisterPageComponent,
    ArticleComponent,
    AboutPageComponent,
    MessagePageComponent,
    ChatPageComponent,
    ProductPageComponent,
    CardProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ sidebar: sidebarReducer }),
    SlickCarouselModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
