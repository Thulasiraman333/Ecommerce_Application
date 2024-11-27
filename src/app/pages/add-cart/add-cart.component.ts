import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { ProductService } from '../../Services/productService/product.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { PromocodepopupComponent } from '../../Services/promocodepopup/promocodepopup.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TotalPrice } from '../../model/totalPriceModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cart',
  standalone: true,
  imports: [MatStepperModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatIconModule, FormsModule, MatDividerModule,
    MatCheckboxModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, CommonModule, MatCardModule, CurrencyPipe],
  templateUrl: './add-cart.component.html',
  styleUrl: './add-cart.component.scss',
})
export class AddCartComponent {
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  productService = inject(ProductService);
  badgeCount: Number = 0;
  cartDetailsData: any[] = [];
  promoCode: String = '';
  quantity: any = [
    {
      value: 1,
      key: 1
    },
    {
      value: 2,
      key: 2
    },
    {
      value: 3,
      key: 3
    },
    {
      value: 4,
      key: 4
    },
    {
      value: 5,
      key: 5
    },
    {
      value: 6,
      key: 6
    },
    {
      value: 7,
      key: 7
    },
    {
      value: 8,
      key: 8
    },
    {
      value: 9,
      key: 9
    },
    {
      value: 10,
      key: 10
    },

  ];
  selectedQuantity: number = 1;

  orderDetailsData: TotalPrice = {
    totalMRP: 0,
    CouponDiscount: 0,
    platformFee: 0,
    shippingFee: 0,
    totalAmount: 0
  };
  disablePromocode: boolean = false;
  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog, private router: Router) {

    //To get the notification badge count
    this.productService.badgeCount.subscribe((res) => {
      this.badgeCount = res != 0 ? res : 0;
    });
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    //To get the existing cart details data
    this.cartDetailsData = this.productService.getCartDetails();

    // To assign 1 quantity product price as default total value
    this.cartDetailsData.forEach((el: any) => {
      el['cartTotalPrice'] = el.productPrice;
    })

    //to calculate order details
    this.orderDetailsData.totalMRP = 0
    this.orderDetailsData.totalAmount = 0;
    this.orderDetailsData.CouponDiscount = 0;
    this.orderDetailsData.platformFee = 20;
    this.calculateOrderDetails();
  }

  ondeleteCard(index: number) {
    this.cartDetailsData.splice(index, 1);
    this.productService.updateCartDetails(this.cartDetailsData);
    this.productService.badgeCount.next(this.cartDetailsData.length);
    this.orderDetailsData.totalMRP = 0;
    this.orderDetailsData.totalAmount = 0;
    this.calculateOrderDetails();
  }

  quantityChange(index: any, $event: any, item: any) {
    this.cartDetailsData[index].selectedQuantity = $event;
    this.cartDetailsData[index].cartTotalPrice = $event * item.productPrice;
    this.orderDetailsData.totalMRP = 0;
    this.orderDetailsData.totalAmount = 0;
    this.calculateOrderDetails();
  }

  onPromoCodeSubmit() {
    this.disablePromocode = true;
    if (this.promoCode == 'PROMO_FIRST_LOGIN') {
      this.orderDetailsData.CouponDiscount = 100;
    } else if (this.promoCode == 'CODE_JUNGLE_OFFER') {
      this.orderDetailsData.CouponDiscount = 150;
    } else if (this.promoCode == 'CODE_JOMBO_OFFER') {
      this.orderDetailsData.CouponDiscount = 200;
    }
    this.calculateOrderDetails();
  }

  onPromoCodeSelection() {
    this.dialog.open(PromocodepopupComponent, {
      disableClose: true,
      backdropClass: 'backdropBackground',
      data: {}
    }).afterClosed().subscribe((res: any) => {
      console.log(res);
      this.promoCode = res;
    })
  }

  placeOrder() {
    this.productService.priceDetailsData = this.orderDetailsData;
    this.router.navigate(['address-details']);
  }

  calculateOrderDetails() {
    if (this.orderDetailsData.totalMRP == 0) {
      this.cartDetailsData.forEach((el) => {
        this.orderDetailsData.totalMRP += el.cartTotalPrice;
      });
    }
    this.orderDetailsData.totalAmount = this.orderDetailsData.totalMRP + this.orderDetailsData.platformFee + this.orderDetailsData.shippingFee;
    if (this.orderDetailsData.CouponDiscount > 0) {
      this.orderDetailsData.totalAmount = this.orderDetailsData.totalAmount - this.orderDetailsData.CouponDiscount;
    }
  }
}
