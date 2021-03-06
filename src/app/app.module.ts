import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { LandingComponent } from './components/landing/landing.component';
import { SelectionComponent } from './components/selection/selection.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/user/login/login.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { AuctionListingComponent } from './components/auction/auction-listing/auction-listing.component';
import { SellListingComponent } from './components/sell/sell-listing/sell-listing.component';
import { SellProductComponent } from './components/sell/sell-product/sell-product.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavItemsComponent } from './components/nav-bar/nav-items/nav-items.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SelectionComponent,
    HomepageComponent,
    LoginComponent,
    SignUpComponent,
    DiscoverComponent,
    NavBarComponent,
    NavItemsComponent,
    AuctionListingComponent,
    SellListingComponent,
    SellProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxUsefulSwiperModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
