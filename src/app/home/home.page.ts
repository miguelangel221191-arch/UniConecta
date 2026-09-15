import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonCard,
IonCardContent,
IonBadge,
IonItem,
IonInput,
IonButton,
IonLabel
} from '@ionic/angular';

import { NetworkService } from '../services/network.service';
import { OfflineService } from '../services/offline.service';

@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
standalone: true,
imports: [
CommonModule,
FormsModule,
RouterLink,
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonCard,
IonCardContent,
IonBadge,
IonItem,
IonInput,
IonButton,
IonLabel
]
})
export class HomePage implements OnInit {

isOnline = navigator.onLine;
nombre = '';

constructor(
private networkService: NetworkService,
private offlineService: OfflineService,
private cdr: ChangeDetectorRef
) {}

ngOnInit() {

this.networkService
.getConnectionStatus()
.subscribe(status => {
this.isOnline = status;
this.cdr.detectChanges();
});

window.addEventListener('online', async () => {

this.isOnline = true;

await this.offlineService.sincronizarDatos();

alert(
'Conexión recuperada. Datos sincronizados correctamente.'
);

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

async guardarRegistro() {

if (!this.nombre) {
alert('Ingrese un nombre');
return;
}

const dato = {
nombre: this.nombre,
fecha: new Date()
};

if (this.isOnline) {

console.log(
'Dato enviado al servidor',
dato
);

alert(
'Dato enviado al servidor'
);

} else {

await this.offlineService.guardarDato(dato);

alert(
'Sin conexión. Dato guardado localmente.'
);

}

this.nombre = '';

}

}