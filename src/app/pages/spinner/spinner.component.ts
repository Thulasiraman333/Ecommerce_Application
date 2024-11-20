import { Component, inject } from '@angular/core';
import { LoaderService } from '../../Services/loader.service';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  loader = inject(LoaderService);
}
