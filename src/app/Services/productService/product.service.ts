import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { trendingProducts } from '../../model/productModel';
import { TotalPrice } from '../../model/totalPriceModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  priceDetailsData: TotalPrice;
  constructor() {
    this.priceDetailsData = {
      totalMRP: 0,
      CouponDiscount: 0,
      platformFee: 20,
      shippingFee: 0,
      totalAmount: 0
    }
  }
  badgeCount = new BehaviorSubject<Number>(0);

  cartDetailsData: trendingProducts[] = [];

  getCartDetails() {
    return this.cartDetailsData;
  }

  updateCartDetails(cartData: trendingProducts[]) {
    this.cartDetailsData = cartData;
  }

}
