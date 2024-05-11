import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from '../../types/location.interface';




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
}
