export class TotalPrice {
  totalMRP: number
  CouponDiscount: number
  platformFee: number
  shippingFee: number
  totalAmount: number

  constructor() {
    this.totalMRP = 0;
    this.CouponDiscount = 0;
    this.platformFee = 20;
    this.shippingFee = 0;
    this.totalAmount = 0;
  }
}


