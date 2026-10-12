import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
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
  IonCardContent, 
  IonSpinner, 
  IonRefresher, 
  IonRefresherContent,
  IonButton,
  IonButtons,
  IonBackButton
} from '@ionic/angular';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonSpinner, 
    IonRefresher, 
    IonRefresherContent,
    IonButton,
    IonButtons,
    IonBackButton
  ]
})
export class NoticiasPage implements OnInit {

  noticias: Array<any> = [];
  cargando: boolean = true;
  errorMensaje: string = '';

  constructor(
    private zone: NgZone,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.cargarNoticias();
  }

  async cargarNoticias(event?: any) {
    this.cargando = true;
    this.errorMensaje = '';

    // Se simulama un pequeño retraso de red (como una API real) y cargamos noticias institucionales oficiales
    setTimeout(() => {
      this.zone.run(() => {
        this.noticias = [
          {
            title: 'Inicio del Periodo Académico 2026-32',
            body: 'La Escuela de Ingeniería y Tecnología da la bienvenida a todos los participantes inscritos en los programas de grado y postgrado bajo la modalidad virtual.'
          },
          {
            title: 'Jornada de Innovación Tecnológica y Móvil',
            body: 'Participa en el próximo taller presencial sobre desarrollo con Ionic y Capacitor enfocado en la solución de problemas del entorno socioeducativo.'
          },
          {
            title: 'Apertura de నnscripciones para el Programa de Becas',
            body: 'Estudiantes de honor con índice sobresaliente ya pueden postularse para el nuevo ciclo de apoyo financiero institucional de la UAPA.'
          },
          {
            title: 'Mantenimiento Programado de la Plataforma Virtual',
            body: 'Se informa que el campus virtual estará recibiendo actualizaciones de optimización este fin de semana en horario nocturno.'
          }
        ];
        this.cargando = false;
        if (event) {
          event.target.complete();
        }
        this.cdr.detectChanges();
      });
    }, 800);
  }

  doRefresh(event: any) {
    this.cargarNoticias(event);
  }

}