import { Injectable } from '@angular/core';
import { BleClient } from '@capacitor-community/bluetooth-le';

@Injectable({
providedIn: 'root'
})
export class Bluetooth {

async iniciarBluetooth() {

try {

await BleClient.initialize();

alert('Bluetooth inicializado correctamente');

} catch (error) {

console.error(error);

alert('Bluetooth no disponible en navegador. Pruebe en Android.');

}

}

}