import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { trendingProducts } from '../../model/productModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  badgeCount = new BehaviorSubject<Number>(0);

  cartDetailsData: trendingProducts[] = [];

  getCartDetails() {
    return this.cartDetailsData;
  }

  updateCartDetails(cartData: trendingProducts[]) {
    this.cartDetailsData = cartData;
  }

}
