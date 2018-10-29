import { IOffice } from './../models/office';
// import { MockOffices } from './../mock-data/offices';
import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { State } from '@progress/kendo-data-query';
// import {
//     GridDataResult,
//     // DataStateChangeEvent
// } from '@progress/kendo-angular-grid';
import { DataStoreService } from '../services/data-store.service';


@Component ({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent implements OnInit {

  view: IOffice[];

  constructor(private dataService: DataStoreService) { }

  // public state: State = {
  //     skip: 0,
  //     take: 5
  // };

  // constructor(private service: MockOffices) {
  //     this.view = service;
  //     this.service.query(this.state);
  // }

  // public dataStateChange(state: DataStateChangeEvent): void {
  //     this.state = state;
  //     this.service.query(state);
  // }

  ngOnInit() {
    this.view = this.dataService.getOffices();
    console.log(this.view);
  }
}
