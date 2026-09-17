import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
IonContent,
IonHeader,
IonTitle,
IonToolbar,
IonItem,
IonLabel,
IonInput,
IonButton
} from '@ionic/angular';

@Component({
selector: 'app-login',
templateUrl: './login.page.html',
styleUrls: ['./login.page.scss'],
standalone: true,
imports: [
CommonModule,
FormsModule,
IonContent,
IonHeader,
IonTitle,
IonToolbar,
IonItem,
IonLabel,
IonInput,
IonButton
]
})
export class LoginPage implements OnInit {

constructor(
private router: Router
) { }

ngOnInit() {
}

iniciarSesion() {
this.router.navigate(['/dashboard']);
}

}