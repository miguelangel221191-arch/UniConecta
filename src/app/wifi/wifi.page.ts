import { Component } from '@angular/core';
import { Network } from '@capacitor/network';

@Component({
selector: 'app-wifi',
templateUrl: './wifi.page.html',
styleUrls: ['./wifi.page.scss'],
})
export class WifiPage {

estado = '';

constructor() {}

async verificarWifi() {

const status = await Network.getStatus();

if (status.connected) {
this.estado = 'Conectado a Internet';
} else {
this.estado = 'Sin conexión';
}

}

}