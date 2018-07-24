import { Component, OnInit } from '@angular/core';

import { AddressService } from '../../service/address.service'
import { Address } from '../../service/address.model';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  addresses: Address[]
  constructor(private addressService: AddressService) { }

  ngOnInit() {
    this.getAddresses();
  }

  getAddresses() {
    this.addressService.getAddresses().subscribe(data => {
      this.addresses = data;
    })
  }

  onEdit(address) {
    // this.addressService.selectedAddress = Object.assign({}, address);
  }

  deleteAddress(address: Address) {
    var agree = confirm("Are you sure you want to delete this file?");
    if (agree == true) {
      this.addresses = this.addresses.filter(h => h !== address);
      this.addressService.deleteAddress(address).subscribe();
    }
    else {
      return false;
    }
  }

  download() {
    this.addressService.getAddresses().subscribe(data=>{
      new Angular5Csv(data, 'Address List');
    });
  }
}
