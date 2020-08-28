import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Address } from 'src/app/models/address';
import { parseAddresses } from 'src/app/helpers/arrayHelper';
import { ParsedData } from 'src/app/models/parsedData';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  headers = [
    {name: 'number', sorting: false},
    {name: 'street', sorting: false},
    {name: 'city', sorting: false},
    {name: 'zip', sorting: false},
    {name: 'state', sorting: false}
  ];
  page = 0;
  column: string;
  order: string;
  response: ParsedData;
  constructor(
    private apiSvc: ApiService
  ) { }

  ngOnInit(): void {
    this.getAddresses(this.page);
  }

  sort(column) {
    this.headers.forEach(header => {
      header.sorting = false;
    });
    if (this.order === 'asc') {
      this.order = 'desc';
      column.sorting = true;

    } else {
      this.order = 'asc';
      column.sorting = false;
    }
    this.column = column.name;
  }

  getAddresses(page) {
    this.apiSvc.getAddresses().subscribe(addresses => {
      this.response = parseAddresses(addresses, page);
    });
  }

  passPage(page) {
    this.page = this.page + page;
    this.getAddresses(this.page);
  }
}
