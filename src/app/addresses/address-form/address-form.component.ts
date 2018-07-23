import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { AddressService } from '../../service/address.service'
import { Address } from '../../service/address.model';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  address: Address =  new Address();
  addresses: Array<Address> = new Array<Address>();

  constructor(private addressService: AddressService) { 
  }

  ngOnInit() {
  }

  onSubmit(addressForm: NgForm) {
    this.createAddress(addressForm.value);
    this.resetForm();
  }

  getAddressInfo(data) {
    this.address.streetName = data.address_components[0].long_name + ' ' + data.address_components[1].long_name;
    this.address.ward = data.address_components[2].long_name;
    this.address.district = data.address_components[3].long_name;
    this.address.city = data.address_components[4].long_name;
    this.address.country = data.address_components[5].long_name;
    this.addressService.selectedAddress = this.address;
  }

  resetForm(addressForm?: NgForm) {
    if (addressForm != null)
      addressForm.reset();
    this.addressService.selectedAddress = {
      id: null,
      streetName: '',
      ward: '',
      district: '',
      city: '',
      country: ''
    }
  }

  createAddress(address: Address): void {
    this.addressService.createAddress(address as Address).subscribe(address => {
      this.addresses.push(address);
    })
  }

}
