import { Injectable, NgZone } from '@angular/core';
import { Network } from '@capacitor/network';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  private status$ = new BehaviorSubject<boolean>(navigator.onLine);

  constructor(private zone: NgZone) {
    this.initNetworkMonitoring();
  }

  private async initNetworkMonitoring() {
    // 1. Estado inicial
    const status = await Network.getStatus();
    this.updateStatus(status.connected && navigator.onLine);

    // 2. Escuchar Capacitor (Dispositivos móviles)
    Network.addListener('networkStatusChange', (status) => {
      this.updateStatus(status.connected);
    });

    // 3. Escuchar eventos directos del navegador / SO
    window.addEventListener('online', () => this.updateStatus(true));
    window.addEventListener('offline', () => this.updateStatus(false));
  }

  // Método manual para cambiar el estado desde la UI si se desea probar
  public setOfflineManual(isOnline: boolean) {
    this.updateStatus(isOnline);
  }

  private updateStatus(connected: boolean) {
    this.zone.run(() => {
      this.status$.next(connected);
    });
  }

  getConnectionStatus(): Observable<boolean> {
    return this.status$.asObservable();
  }
}