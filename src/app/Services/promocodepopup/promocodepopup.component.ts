import { Component, inject, Inject } from '@angular/core';
import { SnackbarService } from '../snackbar.service';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MasterService } from '../master.service';
import { IApiResponseModel } from '../../model/productModel';

@Component({
  selector: 'app-promocodepopup',
  standalone: true,
  imports: [MatIconModule, MatDialogModule],
  templateUrl: './promocodepopup.component.html',
  styleUrl: './promocodepopup.component.scss'
})
export class PromocodepopupComponent {

  httpService = inject(MasterService);
  constructor(private snackbarService: SnackbarService,
    public dialogRef: MatDialogRef<PromocodepopupComponent>) { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.loadPromocodeDetails();
    }, 0);
  }


  loadPromocodeDetails() {
    this.httpService.getPromoCodeDetails().subscribe((res: IApiResponseModel) => {
    }, (error: any) => {
      console.log(error);
    })
  }

  onCloseModal() {
    this.dialogRef.close('PROMO_FIRST_LOGIN');
  }

  onSubmitCode() {
    this.dialogRef.close('PROMO_FIRST_LOGIN');
  }
}
