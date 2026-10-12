import { Component, OnInit, OnDestroy, NgZone, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Network, ConnectionStatus } from '@capacitor/network';
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
  selector: 'app-wifi',
  templateUrl: './wifi.page.html',
  styleUrls: ['./wifi.page.scss'],
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
export class WifiPage implements OnInit, OnDestroy {

  isOnline: boolean = true;
  tipoConexion: string = 'desconocido';
  private networkListener: any;

  constructor(
    private zone: NgZone,
    private cdr: ChangeDetectorRef
  ) { }

  async ngOnInit() {
    await this.verificarEstadoRed();

    // ver cambios en la red en tiempo real
    this.networkListener = await Network.addListener('networkStatusChange', (status: ConnectionStatus) => {
      this.zone.run(() => {
        this.isOnline = status.connected;
        this.tipoConexion = status.connectionType;
        this.cdr.detectChanges();
      });
    });
  }

  async verificarEstadoRed() {
    try {
      const status = await Network.getStatus();
      this.zone.run(() => {
        this.isOnline = status.connected;
        this.tipoConexion = status.connectionType;
        this.cdr.detectChanges();
      });
    } catch (error) {
      console.error('Error al obtener el estado de la red', error);
    }
  }

  ngOnDestroy() {
    if (this.networkListener) {
      this.networkListener.remove();
    }
  }

}