import { IOffice } from './../models/office';
import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
import { MockOffices } from '../mock-data/offices';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() { }

  private offices: IOffice[] = MockOffices;

  getOffices() {
    return this.offices;
  }
}
