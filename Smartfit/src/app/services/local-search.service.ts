import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalSearchService {

  constructor(private httpClient: HttpClient) { }

  search() {
    return this.httpClient.get<searchResponse>('https://test-frontend-developer.s3.amazonaws.com/data/locations.json')
  }
}

interface searchResponse {
  locations: Location[]
}

interface Location {
  title: string
  content: string
  opened: boolean
  schedules: Schedule
}

interface Schedule {
  weekdays: string
  hour: string
}

