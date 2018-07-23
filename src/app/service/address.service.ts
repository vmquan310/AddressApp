import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Address } from './address.model'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  selectedAddress: Address;

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://5b55e894503d920014688823.mockapi.io/api/addresses'


  getAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(this.apiUrl);
  }

  createAddress(address: Address): Observable<any> {
    return this.http.post(this.apiUrl, address, httpOptions).pipe(tap(data => data));
  }

  updateAddress (address: Address): Observable<any> {
    const id = typeof address === 'number' ? address : address.id;
    const url = `${this.apiUrl}/${id}`;
    
    return this.http.put(url, address, httpOptions)
  }

  deleteAddress (address: Address | number): Observable<Address> {
    const id = typeof address === 'number' ? address : address.id;
    const url = `${this.apiUrl}/${id}`;
  
    return this.http.delete<Address>(url, httpOptions);
  }
}
