import { Component, Input } from '@angular/core';
import { Address } from 'src/app/models/address';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() address: Address;

  constructor(
    private apiSvc: ApiService
  ) { }

  updateValues(event) {
    this.apiSvc.updateAddress(this.address).subscribe(address => {
      this.address = address;
    });
  }
}
