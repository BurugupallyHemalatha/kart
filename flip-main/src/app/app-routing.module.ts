import { Component, Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/AllProducts/home/home.component';
import { BecomeSellerComponent } from './Components/become-seller/become-seller.component';
import { CartComponent } from './Components/cart/cart.component';
import { FlipkartPlusZoneComponent } from './Components/login/flipkart-plus-zone/flipkart-plus-zone.component';
import { GiftcardsComponent } from './Components/login/giftcards/giftcards.component';
import { MyprofileComponent } from './Components/login/myprofile/myprofile.component';
import { OrdersComponent } from './Components/login/orders/orders.component';
import { RewardsComponent } from './Components/login/rewards/rewards.component';
import { SignupComponent } from './Components/login/signup/signup.component';
import { WishlistComponent } from './Components/login/wishlist/wishlist.component';



const routes: Routes = [
{path:'',component:HomeComponent},
{path:'cart',component:CartComponent},
{path:'become-seller',component:BecomeSellerComponent},
{path:'flipkart-plus-zone',component:FlipkartPlusZoneComponent},
{path:'giftcards',component:GiftcardsComponent},
{path:'myprofile',component:MyprofileComponent},
{path:'orders',component:OrdersComponent},
{path:'rewards',component:RewardsComponent},
{path:'signup',component:SignupComponent},
{path:'wishlist',component:WishlistComponent},
{path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {} 