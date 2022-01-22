import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectionComponent } from './components/selection/selection.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/user/login/login.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { AuctionListingComponent } from './components/auction/auction-listing/auction-listing.component';
import { SellListingComponent } from './components/sell/sell-listing/sell-listing.component';
import { SellProductComponent } from './components/sell/sell-product/sell-product.component';

const routes: Routes = [
  { path: '', redirectTo: '/selection', pathMatch:'full'},
  { path: 'selection', component: SelectionComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'discover', component: DiscoverComponent},
  { path: 'sell-listing', component: SellListingComponent},
  { path: 'sell-product', component: SellProductComponent},
  { path: 'auction-listing', component: AuctionListingComponent},
  { path: '**', redirectTo: '/selection', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
