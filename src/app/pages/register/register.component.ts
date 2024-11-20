import { Component, Inject, inject } from '@angular/core';
import { MasterService } from '../../Services/master.service';
import { User, Login, IApiResponseModel } from '../../model/productModel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../../Services/snackbar.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatDialogModule, MatIconModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerDetails: User = new User();
  loginDetails: Login = new Login();
  isLoginVisible: boolean = true;
  loggedUserData: User = new User();
  service = inject(MasterService)
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private snackbarService: SnackbarService,
    public dialogRef: MatDialogRef<RegisterComponent>) { }
  ngOnInit() {

  }
  onCloseModal() {
    this.dialogRef.close();
  }

  toggleForm(flag: any) {
    this.isLoginVisible = flag;
  }

  onRegisterNow() {
    this.service.AddNewUser(this.registerDetails).subscribe((res: IApiResponseModel) => {
      this.snackbarService.success('Registered Successfully');
      this.dialogRef.close();
      localStorage.setItem('userDetails', JSON.stringify(res));
      this.registerDetails = new User();
    }, (error) => {
      console.log(error);
    })
  }


  onLoginNow() {
    this.service.login(this.loginDetails).subscribe((res: IApiResponseModel) => {
      this.snackbarService.success('Logged in Successfully');
      this.dialogRef.close();
      localStorage.setItem('userDetails', JSON.stringify(res));
    }, (error) => {
      console.log(error);
    })
  }

  onLogOff() {
    this.loggedUserData = new User();
    localStorage.removeItem('userDetails');
  }
}
