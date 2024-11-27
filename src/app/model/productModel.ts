export class trendingProducts {
  thumbnailUrl: String
  productPrice: Number
  productName: string
  entity_id: Number
  isAvailableInCart: boolean
  selectedQuantity: Number
  sizes: String
  imageFrontView: String
  imageBackView: String
  imageSideView: String
  imageFullView: String



  constructor() {
    this.thumbnailUrl = "",
      this.productPrice = 0,
      this.productName = "",
      this.entity_id = 0,
      this.isAvailableInCart = false,
      this.selectedQuantity = 1,
      this.sizes = '',
      this.imageFrontView = '',
      this.imageBackView = '',
      this.imageSideView = '',
      this.imageFullView = ''
  }
}
export class Products {
  thumbnailUrl: String
  productPrice: Number
  productName: string
  entity_id: Number
  isAvailableInCart: boolean
  selectedQuantity: Number
  sizes: string
  imageFrontView: String
  imageBackView: String
  imageSideView: String
  imageFullView: String

  constructor() {
    this.thumbnailUrl = "",
      this.productPrice = 0,
      this.productName = "",
      this.entity_id = 0,
      this.isAvailableInCart = false,
      this.selectedQuantity = 1,
      this.sizes = '',
      this.imageFrontView = '',
      this.imageBackView = '',
      this.imageSideView = '',
      this.imageFullView = ''
  }
}


export class User {
  userId: number
  userName: string
  emailId: string
  createdDate: Date
  password: string

  constructor() {
    this.userId = 0;
    this.userName = '';
    this.emailId = '';
    this.createdDate = new Date();
    this.password = '';
  }
}

export class Login {
  userName: string
  password: string

  constructor() {
    this.userName = '';
    this.password = '';
  }
}

export interface IApiResponseModel {
  message: string,
  result: boolean,
  data: any;
}