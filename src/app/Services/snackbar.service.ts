import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }


  success(message: string, action: string = '') {
    const config = new MatSnackBarConfig();
    config.horizontalPosition = 'left';
    config.verticalPosition = 'bottom';
    config.duration = 1500;
    config.panelClass = ['success-dialog-snackbar'];
    this.snackBar.open(message, action, config);
  }

  error(message: string, action: string = '') {
    const config = new MatSnackBarConfig();
    config.horizontalPosition = 'center';
    config.verticalPosition = 'bottom';
    config.duration = 1000;
    config.panelClass = ['error-dialog-snackbar'];
  }
}
