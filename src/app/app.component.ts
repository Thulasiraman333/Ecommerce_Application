import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./pages/header/header.component";
import { HomeComponent } from './pages/home/home.component';
import { SpinnerComponent } from './pages/spinner/spinner.component';
import { MasterService } from './Services/master.service';
import { FooterComponent } from "./pages/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SpinnerComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ecommerce_Application';
  service = inject(MasterService);
  showHomePage: boolean = true;
  constructor() {
  }

  ngOnInit() { }
}
