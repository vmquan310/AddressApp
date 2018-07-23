import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MapService } from '../service/map.service'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Output() onTest = new EventEmitter<any>();

  constructor(private mapService: MapService) { }

  ngOnInit() {
  }

  lat: number = 10.801356879681844;
  lng: number = 106.65363127668411;
  locationChosen = false;
  addressInfo: string

  onChoseLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;

    this.mapService.getAddressInfo(this.lat, this.lng).subscribe(data => {
      this.addressInfo = data.results[0];
      this.onTest.emit(
        this.addressInfo
      )
    })
  }

}
