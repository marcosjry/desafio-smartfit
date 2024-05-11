import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from '../../types/location.interface';

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

@Injectable({
  providedIn: 'root'
})

export class ShareDataService {

  private dataSource = new BehaviorSubject<any[]>([]);
  data = this.dataSource.asObservable();

  constructor() { }

  updateData(data: Location[]) {
    this.dataSource.next(data);
  }


  applyFilterData(data: Location[], checkbox4: boolean, optionCheckBox: string) {
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

  filter(result: Location[], showClosed: boolean, hour: string) {
    let tempResult = result;

    if(!showClosed) {
      tempResult = result.filter(dado => dado.opened === true);
    }

    if (hour) {
      const open_hour = opening_hours[hour as hour_index].first
      const close_hour = opening_hours[hour as hour_index].last
      return tempResult.filter(location => this.searchFilter(location, open_hour, close_hour))  
    } else {
      return tempResult;
    }
  }
}
