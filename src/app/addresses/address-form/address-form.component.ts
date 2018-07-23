import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { AddressService } from '../../service/address.service'

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  streetName: string;
  ward: string;
  district: string;
  city: string;
  country: string;

  constructor(private addressService: AddressService) { }

  ngOnInit() {
  }

  getAddressInfo(data) {
    this.streetName = data.address_components[0].long_name + ' ' + data.address_components[1].long_name;
    this.ward = data.address_components[2].long_name;
    this.district = data.address_components[3].long_name;
    this.city = data.address_components[4].long_name;
    this.country = data.address_components[5].long_name;
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
}
