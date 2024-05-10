import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { PrimaryFormComponent } from '../primary-form/primary-form.component';
import { LegendBarComponent } from '../legend-bar/legend-bar.component';
import { FilteredSearchComponent } from '../filtered-search/filtered-search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    PrimaryFormComponent,
    LegendBarComponent,
    FilteredSearchComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
