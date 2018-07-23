import { Injectable } from '@angular/core';

import { Address } from './address.model'

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  selectedAddress: Address = new Address();
  constructor() { }
}
