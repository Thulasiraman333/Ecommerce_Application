import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddCartComponent } from './pages/add-cart/add-cart.component';
import { AddressDetailsComponent } from './pages/address-details/address-details.component';
import { PaymentDetailsComponent } from './pages/payment-details/payment-details.component';
import { SpecificProductDetailComponent } from './pages/specific-product-detail/specific-product-detail.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'checkout-cart', component: AddCartComponent },
  { path: 'address-details', component: AddressDetailsComponent },
  { path: 'payment-details', component: PaymentDetailsComponent },
  { path: 'product-detail', component: SpecificProductDetailComponent }
];
