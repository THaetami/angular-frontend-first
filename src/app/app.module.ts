import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { DetailProductPageComponent } from './pages/detail-product-page/detail-product-page.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ChartCustomerReviewComponent } from './component/chart-customer-review/chart-customer-review.component';
import { PreviewImageProductComponent } from './component/preview-image-product/preview-image-product.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductContentComponent } from './component/product-content/product-content.component';
import { ShopCredibilityComponent } from './component/shop-credibility/shop-credibility.component';
import { ShipmentComponent } from './component/shipment/shipment.component';
import { OfferingsComponent } from './component/offerings/offerings.component';
import { QRcodeComponent } from './component/qrcode/qrcode.component';
import { ReviewFeedComponent } from './component/review-feed/review-feed.component';
import { NotFoundPageComponent } from './component/not-found-page/not-found-page.component';
import { ShipmentPageComponent } from './pages/shipment-page/shipment-page.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardBillingComponent } from './component/card-billing/card-billing.component';

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
    CardProductComponent,
    DetailProductPageComponent,
    CheckoutComponent,
    CartPageComponent,
    ChartCustomerReviewComponent,
    PreviewImageProductComponent,
    ProductDetailComponent,
    ProductContentComponent,
    ShopCredibilityComponent,
    ShipmentComponent,
    OfferingsComponent,
    QRcodeComponent,
    ReviewFeedComponent,
    NotFoundPageComponent,
    ShipmentPageComponent,
    CardBillingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ sidebar: sidebarReducer }),
    SlickCarouselModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
