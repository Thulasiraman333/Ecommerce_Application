import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from "../home/home.component";
import { RouterLink } from '@angular/router';
import { MasterService } from '../../Services/master.service';
import { TrendingProductsComponent } from "../trending-products/trending-products.component";
import { ProductbrandsComponent } from "../productbrands/productbrands.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, HomeComponent, RouterLink, TrendingProductsComponent, ProductbrandsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  showHomePage: boolean = true;
  service = inject(MasterService);
  constructor() { }
  ngOnInit() {
    this.service.showHomePage.subscribe((res: boolean) => {
      this.showHomePage = res;
    });
  }

  productPage() {
    this.service.showHomePage.next(false);
    this.showHomePage = false;
  }

  homePage() {
    this.service.showHomePage.next(true);
    this.showHomePage = true;
  }
}
