import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Geolocation } from '@capacitor/geolocation';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonButton, 
  IonIcon 
} from '@ionic/angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonCard, 
    IonButton, 
    IonIcon
  ]
})
export class MapPage implements OnInit {

  latitud: number = 18.5097; 
  longitud: number = -69.8395;
  mapUrl!: SafeResourceUrl;

  constructor(
    private zone: NgZone,
    private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.actualizarMapaUrl();
    this.obtenerUbicacion();
  }

  async obtenerUbicacion() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.zone.run(() => {
        this.latitud = coordinates.coords.latitude;
        this.longitud = coordinates.coords.longitude;
        this.actualizarMapaUrl();
        this.cdr.detectChanges();
      });
    } catch(error) {
      console.warn('Usando ubicación predeterminada:', error);
    }
  }

  actualizarMapaUrl() {
    const url = `https://maps.google.com/maps?q=${this.latitud},${this.longitud}&hl=es&z=14&t=m&output=embed`;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // Metodo para abrir el mapa interactivo completo de Google Maps en una nueva pestaña mas comodo
  abrirMapaCompleto() {
    const urlCompleta = `https://www.google.com/maps/search/?api=1&query=${this.latitud},${this.longitud}`;
    window.open(urlCompleta, '_blank');
  }

}