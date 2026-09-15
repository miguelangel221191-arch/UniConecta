import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
import {
IonContent,
IonHeader,
IonTitle,
IonToolbar,
IonButton,
IonCard,
IonCardHeader,
IonCardContent,
IonCardTitle
} from '@ionic/angular';

import { Bluetooth } from '../services/bluetooth';

@Component({
selector: 'app-bluetooth',
templateUrl: './bluetooth.page.html',
styleUrls: ['./bluetooth.page.scss'],
standalone: true,
imports: [
CommonModule,
FormsModule,
IonContent,
IonHeader,
IonTitle,
IonToolbar,
IonButton,
IonCard,
IonCardHeader,
IonCardContent,
IonCardTitle
]
})
export class BluetoothPage {

constructor(
private bluetoothService: Bluetooth
) {}

iniciarBluetooth() {
this.bluetoothService.iniciarBluetooth();
}

}