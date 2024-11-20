import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { ProductService } from '../../Services/productService/product.service';
import { trendingProducts } from '../../model/productModel';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-cart',
  standalone: true,
  imports: [MatStepperModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatIconModule,
    MatCheckboxModule, MatButtonModule, ReactiveFormsModule, CommonModule, MatCardModule, CurrencyPipe],
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
  constructor(private _formBuilder: FormBuilder) {

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
  }

  ondeleteCard(item: any, index: number) {
    this.cartDetailsData.splice(index, 1);
    this.productService.updateCartDetails(this.cartDetailsData);
    this.productService.badgeCount.next(this.cartDetailsData.length);
  }

  quantityChange(index: any, value: number, item: any) {
    this.cartDetailsData[index].cartTotalPrice = value * item.productPrice;
  }
}
