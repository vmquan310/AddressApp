import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  getAddressInfo(lat, lng): Observable<any> {
    var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&sensor=true_or_false&key=AIzaSyDbJNAIga7UdLndYFKrqV6MbK89b7F0G2k'
    return this.http.get<any>(url)
      .pipe(
        tap((responseData) => {
          return responseData;
        }, (error) => {
          return error;
        })
      );
  }
}
