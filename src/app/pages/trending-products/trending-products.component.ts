import { Component } from '@angular/core';
import { trendingProducts } from '../../model/productModel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-trending-products',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './trending-products.component.html',
  styleUrl: './trending-products.component.scss'
})
export class TrendingProductsComponent {

  trendingProduct: trendingProducts[] = [];
  constructor() { this.loadTrendingProducts(); }
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

  }

  loadTrendingProducts() {
    this.trendingProduct = [
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30098990/2024/7/18/84ef2eed-2d13-4873-956d-80bda05fcd131721285536781-Levis-Men-Tshirts-5951721285536327-1.jpg',
        productPrice: 283,
        productName: 'Polo T-Shirt'

      },
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12377258/2024/7/25/ab076c69-6b6d-4445-b87a-f727e99e9e771721903964046-Urbano-Fashion-Men-Teal-Green-Slim-Fit-Tropical-Printed-Pure-1.jpg',
        productPrice: 800,
        productName: 'Luxi  Cozi'
      },
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22492594/2023/11/7/78b3ec12-8c58-48fa-90ea-96aa4a7f6e231699350795811USPoloAssnMenColourblockedRaglanSleevesLoungeT-shirt1.jpg',
        productPrice: 599,
        productName: 'Louis Philippe Jeans'
      },
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29132510/2024/4/23/f4e15ad7-a8ab-411a-9eb4-11ad435fa5ab1713872337315XYXXMenPoloCollarPocketsT-shirt1.jpg',
        productPrice: 432,
        productName: 'XYXX'
      },
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7196053/2019/3/4/37675b61-ac54-493d-a1ae-b4db086075ee1551701172784-Roadster-Men-White-Colourblocked-Polo-Collar-T-shirt-2331551-1.jpg',
        productPrice: 783,
        productName: 'Roadster'

      },
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/31/OKau1Xh8_e8f8f79f22d44e8b8516877ef3b7323f.jpg',
        productPrice: 660,
        productName: 'TANYAA'
      },
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30756235/2024/9/5/14a9cfca-c7cb-4060-8e9e-567e82268a501725526813672-Powerlook-Men-Polo-Collar-T-shirt-4431725526813226-1.jpg',
        productPrice: 599,
        productName: 'Powerlook'
      },
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28727814/2024/4/6/c19682d1-9d4c-4d38-9451-45331bab81851712384125011ManiacMenStripedV-NeckDrop-ShoulderSleevesPocketsT-shirt1.jpg',
        productPrice: 452,
        productName: 'Louis Philippe Jeans'
      },
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30098990/2024/7/18/84ef2eed-2d13-4873-956d-80bda05fcd131721285536781-Levis-Men-Tshirts-5951721285536327-1.jpg',
        productPrice: 283,
        productName: 'Polo T-Shirt'

      },
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12377258/2024/7/25/ab076c69-6b6d-4445-b87a-f727e99e9e771721903964046-Urbano-Fashion-Men-Teal-Green-Slim-Fit-Tropical-Printed-Pure-1.jpg',
        productPrice: 800,
        productName: 'Luxi  Cozi'
      },
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22492594/2023/11/7/78b3ec12-8c58-48fa-90ea-96aa4a7f6e231699350795811USPoloAssnMenColourblockedRaglanSleevesLoungeT-shirt1.jpg',
        productPrice: 599,
        productName: 'Louis Philippe Jeans'
      },
      {
        thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29132510/2024/4/23/f4e15ad7-a8ab-411a-9eb4-11ad435fa5ab1713872337315XYXXMenPoloCollarPocketsT-shirt1.jpg',
        productPrice: 432,
        productName: 'XYXX'
      }
    ]
  }

  addCart() {

  }
}
