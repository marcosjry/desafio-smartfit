import { Component } from '@angular/core';
import { ShareDataService } from '../../services/sharedata/share-data.service';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Location } from '../../types/location.interface';
import { LocalSearchService } from '../../services/localsearch/local-search.service';

@Component({
  selector: 'app-filtered-search',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NgClass
  ],
  providers: [
    LocalSearchService
  ],
  templateUrl: './filtered-search.component.html',
  styleUrl: './filtered-search.component.scss'
})





export class FilteredSearchComponent {
  data: Location [] = [];
  
  constructor(private shareData: ShareDataService, private searchService: LocalSearchService) {}

  ngOnInit() {
    this.shareData.data.subscribe((dado) => {
      this.data = dado;
    })
  }
}

