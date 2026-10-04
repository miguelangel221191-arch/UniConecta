
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonButton,
IonCard,
IonCardHeader,
IonCardTitle,
IonCardContent,
IonInput,
IonItem
} from '@ionic/angular';

import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';

@Component({
selector: 'app-gps',
templateUrl: './gps.page.html',
styleUrls: ['./gps.page.scss'],
standalone: true,

imports: [
CommonModule,
FormsModule,

IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonButton,
IonCard,
IonCardHeader,
IonCardTitle,
IonCardContent,
IonInput,
IonItem
]
})
export class GpsPage {

latitud = 0;
longitud = 0;
mapa: any;
busqueda = '';

async obtenerUbicacion(){

try {

const coordinates =
await Geolocation.getCurrentPosition();

this.latitud =
coordinates.coords.latitude;

this.longitud =
coordinates.coords.longitude;

this.cargarMapa();


} catch(error) {

console.log(error);

}

}
cargarMapa() {

if (this.mapa) {
this.mapa.remove();
}

this.mapa = L.map('map').setView(
[this.latitud, this.longitud],
15
);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
attribution: 'OpenStreetMap'
}
).addTo(this.mapa);

L.marker([
this.latitud,
this.longitud
])
.addTo(this.mapa)
.bindPopup('Mi ubicación')
.openPopup();

}

compartirUbicacion() {

  const url =
    `https://www.google.com/maps?q=${this.latitud},${this.longitud}`;

  window.open(url, '_blank');

}

buscarLugar() {

  if (!this.busqueda) {
    return;
  }

  const url =
    `https://www.google.com/maps/search/${this.busqueda}/@${this.latitud},${this.longitud},15z`;

  window.open(url, '_blank');

}

}