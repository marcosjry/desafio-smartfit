import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalSearchService } from '../../services/localsearch/local-search.service';
import { Location} from '../../types/location.interface';
import { FilteredSearchComponent } from '../filtered-search/filtered-search.component';



type hour_index = 'morning' | 'afternoon' | 'night';
const opening_hours = {
  morning: {
    first: '06',
    last: '12'
  },
  afternoon: {
    first: '12',
    last: '18'
  },
  night: {
    first: '18',
    last: '23'
  }
}

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
    private formBuilder: FormBuilder
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

  searchFilter(local: Location, open_Hour: string, close_Hour: string) {
    if(!local.schedules) return true;
    let filteredOpen_hour = parseInt(open_Hour, 10)
    let filteredClose_hour = parseInt(close_Hour, 10)

    for(let i=0; i < local.schedules.length; i++) {
      let schedule_hour = local.schedules[i].hour
      //let schedule_weekday = local.schedules[i].weekdays
      if(schedule_hour !== 'Fechada') {
        let [local_openHour, local_closeHour] = schedule_hour.split(' às ')
        let local_openHourInt = parseInt(local_openHour.replace('h', ''), 10)
        let local_closeHourInt = parseInt(local_closeHour.replace('h', ''), 10)

        if(local_openHourInt  >= filteredOpen_hour && local_closeHourInt >= filteredClose_hour) return true;
        else return false
      }

    }
    return false
  }

  onClick() {
    let tempResult = this.result;

    if(!this.formGroup.value.showClosed) {
      tempResult = this.result.filter(dado => dado.opened === true);
    }

    if (this.formGroup.value.hour) {
      const open_hour = opening_hours[this.formGroup.value.hour as hour_index].first
      const close_hour = opening_hours[this.formGroup.value.hour as hour_index].last
      this.filteredResults = tempResult.filter(location => this.searchFilter(location, open_hour, close_hour))  
    } else {
      this.filteredResults = tempResult;
    }
    console.log(this.filteredResults)
  }

  onClean() {
    console.log("clean")
  }
}
