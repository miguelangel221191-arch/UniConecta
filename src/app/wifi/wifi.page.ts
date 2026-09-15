import { Component } from '@angular/core';
import { Network } from '@capacitor/network';

import {
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonCard,
IonCardHeader,
IonCardTitle,
IonCardContent,
IonButton
} from '@ionic/angular';

@Component({
selector: 'app-wifi',
templateUrl: './wifi.page.html',
styleUrls: ['./wifi.page.scss'],
standalone: true,
imports: [
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonCard,
IonCardHeader,
IonCardTitle,
IonCardContent,
IonButton
]
})
export class WifiPage {

estado = '';

async verificarWifi() {
const status = await Network.getStatus();

if (status.connected) {
this.estado = 'Conectado a Internet';
} else {
this.estado = 'Sin conexión';
}
}
}