import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly url = './assets/addresses.txt';

  constructor(
    private http: HttpClient
  ) { }

  getAddresses() {
    return this.http.get(this.url, {responseType: 'text'});
  }

  updateAddress(item) {
    return of(item);
    // return this.http.put() some logical to update this item
  }
}
