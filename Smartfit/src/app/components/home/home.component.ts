import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { PrimaryFormComponent } from '../primary-form/primary-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    PrimaryFormComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
