import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
IonContent,
IonHeader,
IonTitle,
IonToolbar,
IonButton,
IonInput,
IonItem
} from '@ionic/angular';

@Component({
selector: 'app-chat',
templateUrl: './chat.page.html',
styleUrls: ['./chat.page.scss'],
imports: [
IonContent,
IonHeader,
IonTitle,
IonToolbar,
IonButton,
IonInput,
IonItem,
CommonModule,
FormsModule
]
})
export class ChatPage implements OnInit {

mensaje = '';

mensajes = [
{
usuario: 'Miguel',
texto: 'Hola equipo'
},
{
usuario: 'Carlos',
texto: 'Buenas tardes'
},
{
usuario: 'Abimilet',
texto: 'Ya revisé la tarea'
}
];

constructor() { }

ngOnInit() {
}

enviarMensaje() {

if (this.mensaje.trim()) {

this.mensajes.push({
usuario: 'Miguel',
texto: this.mensaje
});

this.mensaje = '';

}

}

}