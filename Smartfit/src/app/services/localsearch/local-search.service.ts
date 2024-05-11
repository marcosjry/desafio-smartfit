import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { searchResponse } from '../../types/location.interface';


@Injectable({
  providedIn: 'root'
})
export class LocalSearchService {

  constructor(private httpClient: HttpClient) { }

  search() {
    return this.httpClient.get<searchResponse>('https://test-frontend-developer.s3.amazonaws.com/data/locations.json')
  }
}



