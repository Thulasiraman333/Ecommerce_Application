import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MasterService } from '../../Services/master.service';
import { ProductService } from '../../Services/productService/product.service';
import { SnackbarService } from '../../Services/snackbar.service';
import { CurrencyPipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CurrencyPipe, MatDividerModule],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.scss'
})
export class PaymentDetailsComponent {

  paymentDetailForm: FormGroup = new FormGroup({
    cardHolderName: new FormControl('', [Validators.required]),
    cardNumber: new FormControl('', [Validators.required]),
    expiry: new FormControl('', [Validators.required]),
    cvvNumber: new FormControl('', [Validators.required]),
  })
  productService = inject(ProductService);
  masterService = inject(MasterService);
  badgeCount: Number = 0;
  orderDetailsData: any;

  constructor(private snackbarService: SnackbarService, private router: Router) {
    //To get the notification badge count
    this.productService.badgeCount.subscribe((res) => {
      this.badgeCount = res != 0 ? res : 0;
    });
    this.orderDetailsData = this.productService.priceDetailsData;
  }

  ngOnInit() { }


}
