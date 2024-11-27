import { Component, inject } from '@angular/core';
import { IApiResponseModel, trendingProducts } from '../../model/productModel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from '../../Services/productService/product.service';
import { RegisterComponent } from '../register/register.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { CurrencyPipe } from '@angular/common';
import { MasterService } from '../../Services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending-products',
  standalone: true,
  imports: [CarouselModule, MatDialogModule, CurrencyPipe],
  templateUrl: './trending-products.component.html',
  styleUrl: './trending-products.component.scss'
})
export class TrendingProductsComponent {

  trendingProduct: trendingProducts[] = [];
  productService = inject(ProductService);
  httpService = inject(MasterService);
  userDetails = localStorage.getItem('userDetails');
  cartData: trendingProducts[] = [];
  constructor(private dialog: MatDialog, private router: Router) {
  }
  trendingProductOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  ngOnInit() {
    this.loadTrendingProducts();
    this.cartData = this.productService.getCartDetails();
  }

  loadTrendingProducts() {
    this.httpService.getProductDetails().subscribe((res: IApiResponseModel) => {
      this.trendingProduct = this.httpService.productData;
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
      this.trendingProduct[index].isAvailableInCart = true;
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
    this.trendingProduct[index].isAvailableInCart = false;
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
