import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductService } from '../../Services/productService/product.service';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MasterService } from '../../Services/master.service';
import { SnackbarService } from '../../Services/snackbar.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-address-details',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterLink, MatCardModule, CommonModule, CurrencyPipe, MatDividerModule, MatFormFieldModule, MatLabel, MatInputModule, MatCommonModule
  ],
  templateUrl: './address-details.component.html',
  styleUrl: './address-details.component.scss'
})
export class AddressDetailsComponent {

  addressFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    mobileNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern(/^[6-9]\d{9}$/)]),
    address: new FormControl('', [Validators.required]),
    pincode: new FormControl('', [Validators.required, Validators.maxLength(6), Validators.minLength(6)]),
    locality: new FormControl('', [Validators.required]),
    district: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required])
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

  ngOnInit() {

  }

  addAddressDetails() {
    console.log(this.addressFormGroup);
    if (this.addressFormGroup.invalid) {
      return;
    }
    let model = this.addressFormGroup.value;
    this.masterService.saveAddressDetails(model).subscribe((res: any) => {
      this.snackbarService.success('Address Details saved successfully');
      this.router.navigate(['payment-details']);
    })
  }

  cancelAddressDetails() {
    this.router.navigate(['checkout-cart']);
  }
}
