import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MoreComponent } from './Components/more/more.component';
import { TopOffersComponent } from './Components/AllProducts/top-offers/top-offers.component';
import { GroceryComponent } from './Components/AllProducts/grocery/grocery.component';
import { MobilesComponent } from './Components/AllProducts/mobiles/mobiles.component';
import { FashionComponent } from './Components/AllProducts/fashion/fashion.component';
import { ElectronicsComponent } from './Components/AllProducts/electronics/electronics.component';
import { HomeComponent } from './Components/AllProducts/home/home.component';
import { AppliancesComponent } from './Components/AllProducts/appliances/appliances.component';
import { TravelComponent } from './Components/AllProducts/travel/travel.component';
import { NavbarComponent } from './Components/SharePage/navbar/navbar.component';
import { FooterComponent } from './Components/SharePage/footer/footer.component';
import { BecomeSellerComponent } from './Components/become-seller/become-seller.component';
import { CartComponent } from './Components/cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './Components/login/signup/signup.component';
import { MyprofileComponent } from './Components/login/myprofile/myprofile.component';
import { FlipkartPlusZoneComponent } from './Components/login/flipkart-plus-zone/flipkart-plus-zone.component';
import { OrdersComponent } from './Components/login/orders/orders.component';
import { WishlistComponent } from './Components/login/wishlist/wishlist.component';
import { RewardsComponent } from './Components/login/rewards/rewards.component';
import { GiftcardsComponent } from './Components/login/giftcards/giftcards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './Components/login/register/register.component';





@NgModule({
  declarations: [
   AppComponent,
   MoreComponent,
 
   TopOffersComponent,
   GroceryComponent,
   MobilesComponent,
   FashionComponent,
   ElectronicsComponent,
   HomeComponent,
   AppliancesComponent,
   TravelComponent,
   NavbarComponent,
   FooterComponent,
   BecomeSellerComponent,
   CartComponent,
   SignupComponent,
   MyprofileComponent,
   FlipkartPlusZoneComponent,
   OrdersComponent,
   WishlistComponent,
   RewardsComponent,
   GiftcardsComponent,
   RegisterComponent,


  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
