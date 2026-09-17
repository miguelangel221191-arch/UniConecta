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
selector: 'app-perfil',
templateUrl: './perfil.page.html',
styleUrls: ['./perfil.page.scss'],
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
export class PerfilPage implements OnInit {

nombre = 'Miguel Mena';
carrera = 'Informatica gerencial';
correo = '100073006@p.uapa.edu.do';

constructor() { }

ngOnInit() {
}

}