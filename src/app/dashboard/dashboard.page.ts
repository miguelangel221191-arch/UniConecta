import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
IonContent,
IonHeader,
IonTitle,
IonToolbar,
IonButton
} from '@ionic/angular';

@Component({
selector: 'app-dashboard',
templateUrl: './dashboard.page.html',
styleUrls: ['./dashboard.page.scss'],
imports: [
IonContent,
IonHeader,
IonTitle,
IonToolbar,
IonButton,
CommonModule,
FormsModule
]
})
export class DashboardPage implements OnInit {

constructor(
private router: Router
) { }

ngOnInit() {
}

irGrupos() {
this.router.navigate(['/grupos']);
}

irChat() {
this.router.navigate(['/chat']);
}

irCalendario() {
this.router.navigate(['/calendario']);
}

irPerfil() {
this.router.navigate(['/perfil']);
}

irWifi() {
this.router.navigate(['/wifi']);
}

irBluetooth() {
this.router.navigate(['/bluetooth']);
}

irNfc() {
this.router.navigate(['/nfc']);
}

}
