import { Component, inject } from '@angular/core';
import { trendingProducts } from '../../model/productModel';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { ProductService } from '../../Services/productService/product.service';
import { CurrencyPipe } from '@angular/common';

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
  constructor(private dialog: MatDialog) { }
  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productData = [
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30098990/2024/7/18/84ef2eed-2d13-4873-956d-80bda05fcd131721285536781-Levis-Men-Tshirts-5951721285536327-1.jpg',
        productPrice: 283,
        productName: 'Polo T-Shirt',
        entity_id: 0,
        isAvailableInCart: false
      },
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12377258/2024/7/25/ab076c69-6b6d-4445-b87a-f727e99e9e771721903964046-Urbano-Fashion-Men-Teal-Green-Slim-Fit-Tropical-Printed-Pure-1.jpg',
        productPrice: 800,
        productName: 'Luxi  Cozi',
        entity_id: 1,
        isAvailableInCart: false
      },
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22492594/2023/11/7/78b3ec12-8c58-48fa-90ea-96aa4a7f6e231699350795811USPoloAssnMenColourblockedRaglanSleevesLoungeT-shirt1.jpg',
        productPrice: 599,
        productName: 'Louis Philippe Jeans',
        entity_id: 2,
        isAvailableInCart: false
      },
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29132510/2024/4/23/f4e15ad7-a8ab-411a-9eb4-11ad435fa5ab1713872337315XYXXMenPoloCollarPocketsT-shirt1.jpg',
        productPrice: 432,
        productName: 'XYXX',
        entity_id: 3,
        isAvailableInCart: false
      },
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7196053/2019/3/4/37675b61-ac54-493d-a1ae-b4db086075ee1551701172784-Roadster-Men-White-Colourblocked-Polo-Collar-T-shirt-2331551-1.jpg',
        productPrice: 783,
        productName: 'Roadster',
        entity_id: 4,
        isAvailableInCart: false

      },
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/31/OKau1Xh8_e8f8f79f22d44e8b8516877ef3b7323f.jpg',
        productPrice: 660,
        productName: 'TANYAA',
        entity_id: 5,
        isAvailableInCart: false
      },
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30756235/2024/9/5/14a9cfca-c7cb-4060-8e9e-567e82268a501725526813672-Powerlook-Men-Polo-Collar-T-shirt-4431725526813226-1.jpg',
        productPrice: 599,
        productName: 'Powerlook',
        entity_id: 6,
        isAvailableInCart: false
      },
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28727814/2024/4/6/c19682d1-9d4c-4d38-9451-45331bab81851712384125011ManiacMenStripedV-NeckDrop-ShoulderSleevesPocketsT-shirt1.jpg',
        productPrice: 452,
        productName: 'Louis Philippe Jeans',
        entity_id: 7,
        isAvailableInCart: false
      },
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30098990/2024/7/18/84ef2eed-2d13-4873-956d-80bda05fcd131721285536781-Levis-Men-Tshirts-5951721285536327-1.jpg',
        productPrice: 283,
        productName: 'Polo T-Shirt',
        entity_id: 8,
        isAvailableInCart: false

      },
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12377258/2024/7/25/ab076c69-6b6d-4445-b87a-f727e99e9e771721903964046-Urbano-Fashion-Men-Teal-Green-Slim-Fit-Tropical-Printed-Pure-1.jpg',
        productPrice: 800,
        productName: 'Luxi  Cozi',
        entity_id: 9,
        isAvailableInCart: false
      },
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22492594/2023/11/7/78b3ec12-8c58-48fa-90ea-96aa4a7f6e231699350795811USPoloAssnMenColourblockedRaglanSleevesLoungeT-shirt1.jpg',
        productPrice: 599,
        productName: 'Louis Philippe Jeans',
        entity_id: 10,
        isAvailableInCart: false
      },
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29132510/2024/4/23/f4e15ad7-a8ab-411a-9eb4-11ad435fa5ab1713872337315XYXXMenPoloCollarPocketsT-shirt1.jpg',
        productPrice: 432,
        productName: 'XYXX',
        entity_id: 11,
        isAvailableInCart: false
      }
    ]
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
}
