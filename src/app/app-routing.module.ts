import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartPageComponent } from './menu/cart-page/cart-page.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'checkout', component:PaymentComponent},
  {path: 'login',component:LoginComponent},
  {path:'search/:searchItem',component:MenuComponent},
  {path:'tag/:tag',component:MenuComponent},
  {path:'food/:id',component:FoodpageComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
