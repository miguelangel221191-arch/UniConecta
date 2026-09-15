import { Component } from '@angular/core';
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
selector: 'app-nfc',
templateUrl: './nfc.page.html',
styleUrls: ['./nfc.page.scss'],
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
export class NfcPage {

activarNFC() {
alert('NFC inicializado correctamente');
}

}