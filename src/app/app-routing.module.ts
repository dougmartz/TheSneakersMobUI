import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectionComponent } from './components/selection/selection.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/user/login/login.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { DiscoverComponent } from './components/discover/discover.component';

const routes: Routes = [
  { path: '', redirectTo: '/selection', pathMatch:'full'},
  { path: 'selection', component: SelectionComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'discover', component: DiscoverComponent},
  { path: '**', redirectTo: '/selection', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
