import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
IonContent,
IonHeader,
IonTitle,
IonToolbar,
IonCard,
IonCardHeader,
IonCardTitle,
IonCardContent
} from '@ionic/angular';

@Component({
selector: 'app-calendario',
templateUrl: './calendario.page.html',
styleUrls: ['./calendario.page.scss'],
imports: [
IonContent,
IonHeader,
IonTitle,
IonToolbar,
IonCard,
IonCardHeader,
IonCardTitle,
IonCardContent,
CommonModule,
FormsModule
]
})
export class CalendarioPage implements OnInit {

reuniones = [
{
fecha: '18 Septiembre',
materia: 'Programación de Dispositivos Móviles'
},
{
fecha: '20 Septiembre',
materia: 'Base de Datos'
},
{
fecha: '22 Septiembre',
materia: 'Ingeniería Web'
}
];

constructor() { }

ngOnInit() {
}

}