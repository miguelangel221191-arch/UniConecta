import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonBadge
} from '@ionic/angular';

import { NetworkService } from '../services/network.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonBadge
  ]
})
export class HomePage implements OnInit {

  isOnline = navigator.onLine;

  constructor(
    private networkService: NetworkService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Escuchar el servicio
    this.networkService.getConnectionStatus().subscribe(status => {
      this.isOnline = status;
      this.cdr.detectChanges(); // Forzar renderizado en pantalla
    });

    // Eventos directos del navegador como respaldo
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.cdr.detectChanges();
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
      this.cdr.detectChanges();
    });
  }

  toggleConnection() {
    this.isOnline = !this.isOnline;
    this.cdr.detectChanges();
  }
}