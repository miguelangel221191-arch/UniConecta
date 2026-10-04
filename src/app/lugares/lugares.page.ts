import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonList
} from '@ionic/angular';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonItem,
    IonLabel,
    IonInput,
    IonList
  ]
})
export class LugaresPage {

  lugares: string[] = [];

  buscarLugar(tipo: string) {

    this.lugares = [];

    if (tipo === 'farmacia') {
      this.lugares = [
        'Farmacia Carol',
        'Farmacia GBC',
        'Farmacia Medicar'
      ];
    }

    if (tipo === 'hospital') {
      this.lugares = [
        'Hospital Ney Arias Lora',
        'Hospital Moscoso Puello',
        'Hospital Salvador Gautier'
      ];
    }

    if (tipo === 'restaurante') {
      this.lugares = [
        'Restaurant A',
        'Restaurant B',
        'Restaurant C'
      ];
    }

  }

}