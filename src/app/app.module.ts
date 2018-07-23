import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { Routes, RouterModule } from '@angular/router';

const routesConfig: Routes = [
  { path: 'addresslist', component: AddressListComponent },
  { path: 'addressform', component: AddressFormComponent },
  { path: '', component: AddressListComponent }
]

import { MapComponent } from './map/map.component';
import { AddressListComponent } from './addresses/address-list/address-list.component';
import { AddressFormComponent } from './addresses/address-form/address-form.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routesConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDbJNAIga7UdLndYFKrqV6MbK89b7F0G2k'
    })
  ],
  providers: [],
  declarations: [ AppComponent, MapComponent, AddressListComponent, AddressFormComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}