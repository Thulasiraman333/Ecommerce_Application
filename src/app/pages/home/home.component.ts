import { Component, inject } from '@angular/core';
import { MasterService } from '../../Services/master.service';
import { Router, RouterOutlet } from '@angular/router';
import { TrendingProductsComponent } from '../trending-products/trending-products.component';
import { ProductbrandsComponent } from '../productbrands/productbrands.component';
import { FooterComponent } from "../footer/footer.component";
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TrendingProductsComponent,
    ProductbrandsComponent, FooterComponent,
    MatInputModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  service = inject(MasterService);
  constructor(private router: Router) { }

  ngOnInit() { }

  shopNow() {
    this.service.showHomePage.next(false);
    this.router.navigate(['products']);
  }
}
