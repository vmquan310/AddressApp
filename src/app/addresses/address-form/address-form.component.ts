import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { AddressService } from '../../service/address.service'
import { Address } from '../../service/address.model';
import { MapService } from '../../service/map.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  address: Address = new Address();
  addresses: Array<Address> = new Array<Address>();

  constructor(private addressService: AddressService, private mapService: MapService) {
  }

  ngOnInit() {
  }

  onSubmit(addressForm: NgForm) {
    this.createAddress(addressForm.value);
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

  createAddress(address: Address) {
    this.addressService.createAddress(address as Address).subscribe(address => {
      this.addresses.push(address);
      alert('create successfully!');
      this.address = new Address();
    })
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((location) => {
      this.mapService.getAddressInfo(location.coords.latitude, location.coords.longitude).subscribe(data => {
        this.address.streetName = data.results[0].address_components[0].long_name + ' ' + data.results[0].address_components[1].long_name;
        this.address.ward = data.results[0].address_components[2].long_name;
        this.address.district = data.results[0].address_components[3].long_name;
        this.address.city = data.results[0].address_components[4].long_name;
        this.address.country = data.results[0].address_components[5].long_name;
      })
    });
  }
}
