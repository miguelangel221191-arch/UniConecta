import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
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
  IonList, 
  IonItem, 
  IonLabel, 
  IonButton, 
  IonIcon, 
  IonRange, 
  IonButtons, 
  IonBackButton 
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { play, pause, square, musicalNotes } from 'ionicons/icons';

interface Podcast {
  id: number;
  titulo: string;
  autor: string;
  duracionEstimada: string;
  audioUrl: string;
}

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.page.html',
  styleUrls: ['./podcasts.page.scss'],
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
    IonList, 
    IonItem, 
    IonLabel, 
    IonButton, 
    IonIcon, 
    IonRange, 
    IonButtons, 
    IonBackButton
  ]
})
export class PodcastsPage implements OnInit, OnDestroy {

  listaPodcasts: Podcast[] = [
    {
      id: 1,
      titulo: 'Introducción al Desarrollo Móvil con Ionic',
      autor: 'Escuela de Ingeniería UAPA',
      duracionEstimada: '0:30',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    },
    {
      id: 2,
      titulo: 'Arquitectura de Componentes en Angular',
      autor: 'ISW-307',
      duracionEstimada: '0:45',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    },
    {
      id: 3,
      titulo: 'Buenas Prácticas en Consumo de API REST',
      autor: 'Facultad de Tecnología',
      duracionEstimada: '0:35',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
    }
  ];

  podcastActual: Podcast | null = null;
  audio: HTMLAudioElement | null = null;
  estaReproduciendo: boolean = false;
  tiempoActual: number = 0;
  duracionTotal: number = 0;

  constructor(private cdr: ChangeDetectorRef) {
    addIcons({ play, pause, square, musicalNotes });
  }

  ngOnInit() {
    this.seleccionarPodcast(this.listaPodcasts[0]);
  }

  ngOnDestroy() {
    this.detenerAudio();
  }

  seleccionarPodcast(podcast: Podcast) {
    if (this.audio) {
      this.audio.pause();
    }

    this.podcastActual = podcast;
    this.audio = new Audio(podcast.audioUrl);
    this.estaReproduciendo = false;
    this.tiempoActual = 0;

    this.audio.addEventListener('loadedmetadata', () => {
      this.duracionTotal = this.audio?.duration || 0;
      this.cdr.detectChanges();
    });

    this.audio.addEventListener('timeupdate', () => {
      this.tiempoActual = this.audio?.currentTime || 0;
      this.cdr.detectChanges();
    });

    this.audio.addEventListener('ended', () => {
      this.estaReproduciendo = false;
      this.tiempoActual = 0;
      this.cdr.detectChanges();
    });
  }

  reproducirOPausar() {
    if (!this.audio) return;

    if (this.estaReproduciendo) {
      this.audio.pause();
      this.estaReproduciendo = false;
    } else {
      this.audio.play();
      this.estaReproduciendo = true;
    }
    this.cdr.detectChanges();
  }

  detenerAudio() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.estaReproduciendo = false;
      this.tiempoActual = 0;
      this.cdr.detectChanges();
    }
  }

  cambiarProgreso(event: any) {
    const nuevoTiempo = event.detail.value;
    if (this.audio) {
      this.audio.currentTime = nuevoTiempo;
      this.tiempoActual = nuevoTiempo;
    }
  }

  formatearTiempo(segundos: number): string {
    if (isNaN(segundos) || segundos === 0) return '00:00';
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60);
    return `${min < 10 ? '0' : ''}${min}:${seg < 10 ? '0' : ''}${seg}`;
  }
}