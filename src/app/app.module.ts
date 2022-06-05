import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { RatingModule } from 'ng-starrating';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './menu/search/search.component';
import { TagsComponent } from './menu/tags/tags.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartPageComponent } from './menu/cart-page/cart-page.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    LoginComponent,
    SearchComponent,
    TagsComponent,
    FoodpageComponent,
    CartPageComponent,
    PaymentComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
