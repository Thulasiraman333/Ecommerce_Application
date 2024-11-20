import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { searchFilterList } from '../model/productSearchFilter';
import { User, IApiResponseModel, Login } from '../model/productModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  showHomePage = new BehaviorSubject(false);

  apiUrl = 'https://jsonplaceholder.typicode.com/';
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
}
