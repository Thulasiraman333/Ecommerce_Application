import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { searchFilterList } from '../model/productSearchFilter';
import { User, IApiResponseModel, Login, trendingProducts } from '../model/productModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  showHomePage = new BehaviorSubject(false);

  apiUrl = 'https://jsonplaceholder.typicode.com/';
  productData: trendingProducts[] = [{
    thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30098990/2024/7/18/84ef2eed-2d13-4873-956d-80bda05fcd131721285536781-Levis-Men-Tshirts-5951721285536327-1.jpg',
    productPrice: 283,
    productName: 'Polo T-Shirt',
    entity_id: 0,
    isAvailableInCart: false,
    selectedQuantity: 1,
    sizes: 'M',
    imageFrontView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/OCTOBER/10/nkiKOwG4_7ed873df71984009b4fdb10aa010192f.jpg",
    imageBackView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/OCTOBER/10/A7rahmhY_e5530e6a113248dfa6d534450f53dad5.jpg",
    imageSideView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/OCTOBER/10/ZfAYky9H_baed2b7c650a4601b662c93b4652f8d6.jpg",
    imageFullView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/OCTOBER/10/Wc8j61qP_6c2ee53d645c40e9af710701b30ebf7b.jpg"
  },
  {
    thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12377258/2024/7/25/ab076c69-6b6d-4445-b87a-f727e99e9e771721903964046-Urbano-Fashion-Men-Teal-Green-Slim-Fit-Tropical-Printed-Pure-1.jpg',
    productPrice: 800,
    productName: 'Luxi  Cozi',
    entity_id: 1,
    isAvailableInCart: false,
    selectedQuantity: 1,
    sizes: 'M',
    imageFrontView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/xiP54wx4_9e23ddd97dae43d9ad42be6c7cb3582f.jpg",
    imageBackView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/7ZBbNXkD_d197b4c2a32a45b4bfaaff36257931b3.jpg",
    imageSideView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/4quvx1D1_0136db4a2d3e4484ac3d0c8b5f9d9c6c.jpg",
    imageFullView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/CiXVCpGL_05c9557b004b46b9a562aec9e8660c17.jpg",
  },
  {
    thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22492594/2023/11/7/78b3ec12-8c58-48fa-90ea-96aa4a7f6e231699350795811USPoloAssnMenColourblockedRaglanSleevesLoungeT-shirt1.jpg',
    productPrice: 599,
    productName: 'Louis Philippe Jeans',
    entity_id: 2,
    isAvailableInCart: false,
    selectedQuantity: 1,
    sizes: 'L',
    imageFrontView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29309630/2024/5/2/47543cee-96ab-464c-8afb-49a7b0023c121714663832933HERENOWMenV-NeckPocketsSlimFitT-shirt1.jpg",
    imageBackView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29309630/2024/5/2/30c4865f-3ea2-4cfd-98f2-a85dd23bcf421714663832910HERENOWMenV-NeckPocketsSlimFitT-shirt2.jpg",
    imageSideView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29309630/2024/5/2/eb23fc9a-a6cf-4cc9-8b0c-aec78198be261714663832877HERENOWMenV-NeckPocketsSlimFitT-shirt3.jpg",
    imageFullView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29309630/2024/5/2/eb23fc9a-a6cf-4cc9-8b0c-aec78198be261714663832877HERENOWMenV-NeckPocketsSlimFitT-shirt3.jpg",
  },
  {
    thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29132510/2024/4/23/f4e15ad7-a8ab-411a-9eb4-11ad435fa5ab1713872337315XYXXMenPoloCollarPocketsT-shirt1.jpg',
    productPrice: 432,
    productName: 'XYXX',
    entity_id: 3,
    isAvailableInCart: false,
    selectedQuantity: 1,
    sizes: 'S',
    imageFrontView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/xiP54wx4_9e23ddd97dae43d9ad42be6c7cb3582f.jpg",
    imageBackView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/7ZBbNXkD_d197b4c2a32a45b4bfaaff36257931b3.jpg",
    imageSideView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/4quvx1D1_0136db4a2d3e4484ac3d0c8b5f9d9c6c.jpg",
    imageFullView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/CiXVCpGL_05c9557b004b46b9a562aec9e8660c17.jpg",
  },
  {
    thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7196053/2019/3/4/37675b61-ac54-493d-a1ae-b4db086075ee1551701172784-Roadster-Men-White-Colourblocked-Polo-Collar-T-shirt-2331551-1.jpg',
    productPrice: 783,
    productName: 'Roadster',
    entity_id: 4,
    isAvailableInCart: false,
    selectedQuantity: 1,
    sizes: 'M',
    imageFrontView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/OCTOBER/10/nkiKOwG4_7ed873df71984009b4fdb10aa010192f.jpg",
    imageBackView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/OCTOBER/10/A7rahmhY_e5530e6a113248dfa6d534450f53dad5.jpg",
    imageSideView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/OCTOBER/10/ZfAYky9H_baed2b7c650a4601b662c93b4652f8d6.jpg",
    imageFullView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/OCTOBER/10/Wc8j61qP_6c2ee53d645c40e9af710701b30ebf7b.jpg"
  },
  {
    thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/31/OKau1Xh8_e8f8f79f22d44e8b8516877ef3b7323f.jpg',
    productPrice: 660,
    productName: 'TANYAA',
    entity_id: 5,
    isAvailableInCart: false,
    selectedQuantity: 1,
    sizes: 'L',
    imageFrontView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29309630/2024/5/2/47543cee-96ab-464c-8afb-49a7b0023c121714663832933HERENOWMenV-NeckPocketsSlimFitT-shirt1.jpg",
    imageBackView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29309630/2024/5/2/30c4865f-3ea2-4cfd-98f2-a85dd23bcf421714663832910HERENOWMenV-NeckPocketsSlimFitT-shirt2.jpg",
    imageSideView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29309630/2024/5/2/eb23fc9a-a6cf-4cc9-8b0c-aec78198be261714663832877HERENOWMenV-NeckPocketsSlimFitT-shirt3.jpg",
    imageFullView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29309630/2024/5/2/eb23fc9a-a6cf-4cc9-8b0c-aec78198be261714663832877HERENOWMenV-NeckPocketsSlimFitT-shirt3.jpg",

  },
  {
    thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30756235/2024/9/5/14a9cfca-c7cb-4060-8e9e-567e82268a501725526813672-Powerlook-Men-Polo-Collar-T-shirt-4431725526813226-1.jpg',
    productPrice: 599,
    productName: 'Powerlook',
    entity_id: 6,
    isAvailableInCart: false,
    selectedQuantity: 1,
    sizes: 'XL',
    imageFrontView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/xiP54wx4_9e23ddd97dae43d9ad42be6c7cb3582f.jpg",
    imageBackView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/7ZBbNXkD_d197b4c2a32a45b4bfaaff36257931b3.jpg",
    imageSideView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/4quvx1D1_0136db4a2d3e4484ac3d0c8b5f9d9c6c.jpg",
    imageFullView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/CiXVCpGL_05c9557b004b46b9a562aec9e8660c17.jpg",
  },
  {
    thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28727814/2024/4/6/c19682d1-9d4c-4d38-9451-45331bab81851712384125011ManiacMenStripedV-NeckDrop-ShoulderSleevesPocketsT-shirt1.jpg',
    productPrice: 452,
    productName: 'Louis Philippe Jeans',
    entity_id: 7,
    isAvailableInCart: false,
    selectedQuantity: 1,
    sizes: 'S',
    imageFrontView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/xiP54wx4_9e23ddd97dae43d9ad42be6c7cb3582f.jpg",
    imageBackView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/7ZBbNXkD_d197b4c2a32a45b4bfaaff36257931b3.jpg",
    imageSideView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/4quvx1D1_0136db4a2d3e4484ac3d0c8b5f9d9c6c.jpg",
    imageFullView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/CiXVCpGL_05c9557b004b46b9a562aec9e8660c17.jpg",
  },
  {
    thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30098990/2024/7/18/84ef2eed-2d13-4873-956d-80bda05fcd131721285536781-Levis-Men-Tshirts-5951721285536327-1.jpg',
    productPrice: 283,
    productName: 'Polo T-Shirt',
    entity_id: 8,
    isAvailableInCart: false,
    selectedQuantity: 1,
    sizes: 'S',
    imageFrontView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/xiP54wx4_9e23ddd97dae43d9ad42be6c7cb3582f.jpg",
    imageBackView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/7ZBbNXkD_d197b4c2a32a45b4bfaaff36257931b3.jpg",
    imageSideView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/4quvx1D1_0136db4a2d3e4484ac3d0c8b5f9d9c6c.jpg",
    imageFullView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/CiXVCpGL_05c9557b004b46b9a562aec9e8660c17.jpg",

  },
  {
    thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12377258/2024/7/25/ab076c69-6b6d-4445-b87a-f727e99e9e771721903964046-Urbano-Fashion-Men-Teal-Green-Slim-Fit-Tropical-Printed-Pure-1.jpg',
    productPrice: 800,
    productName: 'Luxi  Cozi',
    entity_id: 9,
    isAvailableInCart: false,
    selectedQuantity: 1,
    sizes: 'XXL',
    imageFrontView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/xiP54wx4_9e23ddd97dae43d9ad42be6c7cb3582f.jpg",
    imageBackView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/7ZBbNXkD_d197b4c2a32a45b4bfaaff36257931b3.jpg",
    imageSideView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/4quvx1D1_0136db4a2d3e4484ac3d0c8b5f9d9c6c.jpg",
    imageFullView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/CiXVCpGL_05c9557b004b46b9a562aec9e8660c17.jpg",
  },
  {
    thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22492594/2023/11/7/78b3ec12-8c58-48fa-90ea-96aa4a7f6e231699350795811USPoloAssnMenColourblockedRaglanSleevesLoungeT-shirt1.jpg',
    productPrice: 599,
    productName: 'Louis Philippe Jeans',
    entity_id: 10,
    isAvailableInCart: false,
    selectedQuantity: 1,
    sizes: 'L',
    imageFrontView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/xiP54wx4_9e23ddd97dae43d9ad42be6c7cb3582f.jpg",
    imageBackView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/7ZBbNXkD_d197b4c2a32a45b4bfaaff36257931b3.jpg",
    imageSideView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/4quvx1D1_0136db4a2d3e4484ac3d0c8b5f9d9c6c.jpg",
    imageFullView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/CiXVCpGL_05c9557b004b46b9a562aec9e8660c17.jpg",
  },
  {
    thumbnailUrl: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29132510/2024/4/23/f4e15ad7-a8ab-411a-9eb4-11ad435fa5ab1713872337315XYXXMenPoloCollarPocketsT-shirt1.jpg',
    productPrice: 432,
    productName: 'XYXX',
    entity_id: 11,
    isAvailableInCart: false,
    selectedQuantity: 1,
    sizes: 'S',
    imageFrontView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/xiP54wx4_9e23ddd97dae43d9ad42be6c7cb3582f.jpg",
    imageBackView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/7ZBbNXkD_d197b4c2a32a45b4bfaaff36257931b3.jpg",
    imageSideView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/4quvx1D1_0136db4a2d3e4484ac3d0c8b5f9d9c6c.jpg",
    imageFullView: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/SEPTEMBER/2/CiXVCpGL_05c9557b004b46b9a562aec9e8660c17.jpg",
  }]
  constructor(private http: HttpClient) { }

  getSearchFilterList(): searchFilterList[] {
    return [
      {
        code: '1',
        name: 'T-Shirts for Men'
      },
      {
        code: '2',
        name: 'T-Shirts for Women'
      },
      {
        code: '3',
        name: 'T-Shirts Tops',
      },
      {
        code: '4',
        name: "Jeans For Women",
      },
      {
        code: '5',
        name: "Jeans For Men",
      },
      {
        code: '6',
        name: "Jeans Accessories",
      },
      {
        code: '7',
        name: "Jean Shirts",
      },
      {
        code: '8',
        name: "Shirts Men Casual",
      },
      {
        code: '9',
        name: "Ace T-Shirts",
      },
      {
        code: '10',
        name: "Black Shirts",
      }
    ]
  }

  AddNewUser(UserObj: User): Observable<IApiResponseModel> {
    return this.http.post<IApiResponseModel>(`${this.apiUrl}posts`, UserObj);
  }
  login(loginObj: Login): Observable<IApiResponseModel> {
    return this.http.post<IApiResponseModel>(`${this.apiUrl}posts`, loginObj);
  }

  getPromoCodeDetails(): Observable<IApiResponseModel> {
    return this.http.get<IApiResponseModel>(`${this.apiUrl}users`);
  }

  saveAddressDetails(model: any): Observable<IApiResponseModel> {
    return this.http.post<IApiResponseModel>(`${this.apiUrl}posts`, model);
  }

  getProductDetails(): Observable<IApiResponseModel> {
    return this.http.get<IApiResponseModel>(`${this.apiUrl}users`);
  }
}
