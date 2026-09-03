import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import {
IonHeader,
IonToolbar,
IonTitle,
IonContent
} from '@ionic/angular';

import { NetworkService } from '../services/network.service';

@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
standalone: true,
imports: [
CommonModule,
IonHeader,
IonToolbar,
IonTitle,
IonContent
]
})
export class HomePage {

isOnline = true;

constructor(
private networkService: NetworkService
) {

this.networkService
.getConnectionStatus()
.subscribe(status => {

this.isOnline = status;

});

}
}