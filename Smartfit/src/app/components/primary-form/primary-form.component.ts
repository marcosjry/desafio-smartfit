import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalSearchService } from '../../services/localsearch/local-search.service';
import { Location} from '../../types/location.interface';
import { FilteredSearchComponent } from '../filtered-search/filtered-search.component';
import { ShareDataService } from '../../services/sharedata/share-data.service';





@Component({
  selector: 'app-primary-form',
  standalone: true,
  imports: [
    FormsModule,
    FilteredSearchComponent,
    ReactiveFormsModule
  ],
  providers: [
    LocalSearchService
  ],
  templateUrl: './primary-form.component.html',
  styleUrl: './primary-form.component.scss'
})
export class PrimaryFormComponent {
  result: Location[] = [];
  filteredResults: Location[] = []
  formGroup!: FormGroup;
  

 constructor(
    private searchService: LocalSearchService, 
    private formBuilder: FormBuilder,
    private filterAndUpdate: ShareDataService
  ){}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true
    })
    this.searchService.search().subscribe(location => {
      this.result = location.locations
    })
  }



  onClick() {
    let { showClosed, hour } = this.formGroup.value
    this.filteredResults = this.filterAndUpdate.filter(this.result, showClosed, hour)
    this.filterAndUpdate.updateData(this.filteredResults);
  }

  onClean() {
    this.formGroup.reset();
  }
}
