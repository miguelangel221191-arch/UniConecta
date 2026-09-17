import { Component, OnInit } from '@angular/core';
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
IonCardTitle,
IonCardContent
} from '@ionic/angular';

@Component({
selector: 'app-grupos',
templateUrl: './grupos.page.html',
styleUrls: ['./grupos.page.scss'],
imports: [
IonContent,
IonHeader,
IonTitle,
IonToolbar,
IonButton,
IonCard,
IonCardHeader,
IonCardTitle,
IonCardContent,
CommonModule,
FormsModule
]
})
export class GruposPage implements OnInit {

grupos = [
'Programación de Dispositivos Móviles',
'Base de Datos',
'Ingeniería Web'
];

constructor() { }

ngOnInit() {
}

crearGrupo() {
alert('Próximamente podrás crear grupos');
}

}