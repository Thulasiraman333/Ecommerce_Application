import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trendingProducts } from '../../model/productModel';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProductService } from '../../Services/productService/product.service';
import { SnackbarService } from '../../Services/snackbar.service';

@Component({
  selector: 'app-specific-product-detail',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './specific-product-detail.component.html',
  styleUrl: './specific-product-detail.component.scss'
})
export class SpecificProductDetailComponent {

  productData: any;
  selectedSize: string = '';
  smallToggle = true;
  mediumToggle = true;
  largeToggle = true;
  extraLargeToggle = true;
  extraLLToggle = true;
  Sizes: string = '';
  productService = inject(ProductService);
  cartDetailsData: any[] = [];
  addedToCart: boolean = true;
  constructor(private router: Router, private snackBar: SnackbarService) {
    this.productData = this.router.getCurrentNavigation()?.extras.state?.['productData'];
    this.Sizes = this.productData.Sizes;
  }

  ngOnInit() {
    //To get the existing cart details data
    this.cartDetailsData = this.productService.getCartDetails();
  }

  smallSize() {
    this.smallToggle = !this.smallToggle;
    this.mediumToggle = true;
    this.largeToggle = true;
    this.extraLargeToggle = true;
    this.extraLLToggle = true;
    this.Sizes = 'S';
  }

  mediumSize() {
    this.mediumToggle = !this.mediumToggle;
    this.smallToggle = true;
    this.largeToggle = true;
    this.extraLargeToggle = true;
    this.extraLLToggle = true;
    this.Sizes = 'M';
  }

  largeSize() {
    this.largeToggle = !this.largeToggle;
    this.smallToggle = true;
    this.mediumToggle = true;
    this.extraLargeToggle = true;
    this.extraLLToggle = true;
    this.Sizes = 'L';
  }

  extraLargeSize() {
    this.extraLargeToggle = !this.extraLargeToggle;
    this.smallToggle = true;
    this.mediumToggle = true;
    this.largeToggle = true;
    this.extraLLToggle = true;
    this.Sizes = 'XL';
  }

  extraLLSize() {
    this.extraLLToggle = !this.extraLLToggle;
    this.smallToggle = true;
    this.mediumToggle = true;
    this.largeToggle = true;
    this.extraLargeToggle = true;
    this.Sizes = 'XXL';
  }

  addToBag() {
    this.addedToCart = false;
    if (this.cartDetailsData && this.cartDetailsData.length > 0) {
      // To check the selected product already present in the cart
      let indx = this.cartDetailsData.findIndex(el => el.entityId == this.productData.entityId);
      if (indx != -1) {
        this.cartDetailsData[indx].Sizes = this.Sizes;
      }
    } else {
      this.productData.Sizes = this.Sizes;
      this.cartDetailsData.push(this.productData);
    }
    this.productService.cartDetailsData = this.cartDetailsData;
    this.snackBar.success('Added to the cart');

    //To get the cartlength count for notification badge
    let cartlength = this.productService.getCartDetails();
    this.productService.badgeCount.next(cartlength.length);
  }

  moveToBag() {
    this.addedToCart = true;
    this.router.navigate(['checkout-cart']);
  }
}
