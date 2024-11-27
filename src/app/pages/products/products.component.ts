import { Component, inject } from '@angular/core';
import { IApiResponseModel, trendingProducts } from '../../model/productModel';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { ProductService } from '../../Services/productService/product.service';
import { CurrencyPipe } from '@angular/common';
import { MasterService } from '../../Services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatDialogModule, CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  productData: trendingProducts[] = [];
  userDetails = localStorage.getItem('userDetails');
  cartData: trendingProducts[] = [];
  productService = inject(ProductService);
  httpService = inject(MasterService);
  constructor(private dialog: MatDialog, private router: Router) { }
  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.httpService.getProductDetails().subscribe((res: IApiResponseModel) => {
      this.productData = this.httpService.productData;
    })
  }

  addCart(item: trendingProducts, index: number) {
    this.userDetails = localStorage.getItem('userDetails');
    let existingCartData: trendingProducts[] = [];
    if (this.userDetails == null || this.userDetails == undefined || Object.keys(this.userDetails).length === 0) {
      this.dialog.open(RegisterComponent, {
        height: '400px',
        width: '500px',
        hasBackdrop: false,
        backdropClass: 'backdropBackground',
        data: {}
      });
    } else {
      this.productData[index].isAvailableInCart = true;
      existingCartData = this.productService.getCartDetails();
      item.isAvailableInCart = true;
      existingCartData.push(item);
      this.cartData = existingCartData;
      this.productService.updateCartDetails(existingCartData);
    }
    //To get the cartlength count for notification badge
    let cartlength = this.productService.getCartDetails();
    this.productService.badgeCount.next(cartlength.length);
  }

  removeCart(item: trendingProducts, index: number) {
    let existingCartData: trendingProducts[] = [];
    this.productData[index].isAvailableInCart = false;
    existingCartData = this.productService.getCartDetails();
    let indx = existingCartData.map(e => e.entity_id).indexOf(item.entity_id);
    existingCartData.splice(indx, 1);
    this.cartData = existingCartData;
    this.productService.updateCartDetails(existingCartData);

    //To get the cartlength count for notification badge
    let cartlength = this.productService.getCartDetails();
    this.productService.badgeCount.next(cartlength.length);
  }

  availableInCart(item: trendingProducts): boolean {
    if (this.cartData && this.cartData.length > 0) {
      return this.cartData.some(e => e.entity_id === item.entity_id);
    } else {
      return false
    }
  }

  triggerSpecificProduct(productData: trendingProducts) {
    this.router.navigate(['product-detail'], { state: { productData } });
  }
}
