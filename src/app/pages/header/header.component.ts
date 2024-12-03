import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from "../home/home.component";
import { RouterLink } from '@angular/router';
import { MasterService } from '../../Services/master.service';
import { TrendingProductsComponent } from "../trending-products/trending-products.component";
import { ProductbrandsComponent } from "../productbrands/productbrands.component";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { map, Observable, startWith } from 'rxjs';
import { searchFilterList } from '../../model/productSearchFilter';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { MatBadgeModule } from '@angular/material/badge';
import { ProductService } from '../../Services/productService/product.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, HomeComponent, RouterLink, MatInputModule, MatAutocompleteModule, MatFormFieldModule, AsyncPipe, CommonModule,
    MatIconModule, ReactiveFormsModule, MatDialogModule, MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  showHomePage: boolean = false;
  service = inject(MasterService);
  myControl = new FormControl('');
  isBadgeHidden: boolean = false;
  badgeCount: string = '';
  searchFilterData: searchFilterList[] = [];
  productService = inject(ProductService);
  filteredOptions!: Observable<searchFilterList[]>;
  public isCollapsed = true;
  constructor(private dialog: MatDialog) {
    this.searchFilterData = this.service.getSearchFilterList();

    //To get the notification badge count
    this.productService.badgeCount.subscribe((res) => {
      this.badgeCount = res != 0 ? (res).toString() : '';
    });
  }
  ngOnInit() {
    this.service.showHomePage.subscribe((res: boolean) => {
      this.showHomePage = res;
    });


    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value || ''))
      );
  }

  productPage() {
    // To hide the home page and move to product page
    this.service.showHomePage.next(false);
    this.showHomePage = false;
  }

  homePage() {
    this.service.showHomePage.next(true);
    this.showHomePage = true;
  }

  private _filter(value: string): searchFilterList[] {
    const filterValue = value.toLocaleLowerCase();
    console.log(filterValue);
    return this.searchFilterData.filter(option => option.name.toLocaleLowerCase().includes(filterValue));

  }

  openDialog() {
    this.dialog.open(RegisterComponent, {
      height: '400px',
      width: '500px',
      hasBackdrop: false,
      backdropClass: 'backdropBackground',
      data: {}
    });
  }
}
