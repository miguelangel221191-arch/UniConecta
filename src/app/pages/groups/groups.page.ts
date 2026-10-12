import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonButton, 
  IonIcon, 
  IonItem, 
  IonInput, 
  IonList, 
  IonLabel,
  IonItemSliding,
  IonItemOptions,
  IonItemOption
} from '@ionic/angular';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonCard, 
    IonButton, 
    IonIcon, 
    IonItem, 
    IonInput, 
    IonList, 
    IonLabel,
    IonItemSliding,
    IonItemOptions,
    IonItemOption
  ]
})
export class GroupsPage implements OnInit {
  
  grupos: Array<{ id: number, nombre: string, materia: string }> = [];
  nuevoNombre: string = '';
  nuevaMateria: string = '';

  constructor(
    private zone: NgZone,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.cargarGrupos();
  }

  cargarGrupos() {
    const guardados = localStorage.getItem('uniconecta_grupos');
    if (guardados) {
      this.grupos = JSON.parse(guardados);
    } else {
      this.grupos = [
        { id: 1, nombre: 'Estudio ISW-307', materia: 'Ingeniería de Software III' },
        { id: 2, nombre: 'Proyecto Móvil', materia: 'Desarrollo de Apps' }
      ];
      this.guardarEnStorage();
    }
  }

  agregarGrupo() {
    if (this.nuevoNombre.trim() && this.nuevaMateria.trim()) {
      const nuevo = {
        id: new Date().getTime(),
        nombre: this.nuevoNombre,
        materia: this.nuevaMateria
      };

      this.zone.run(() => {
        this.grupos.push(nuevo);
        this.guardarEnStorage();
        this.nuevoNombre = '';
        this.nuevaMateria = '';
        this.cdr.detectChanges();
      });
    }
  }

  eliminarGrupo(id: number) {
    this.zone.run(() => {
      this.grupos = this.grupos.filter(g => g.id !== id);
      this.guardarEnStorage();
      this.cdr.detectChanges();
    });
  }

  guardarEnStorage() {
    localStorage.setItem('uniconecta_grupos', JSON.stringify(this.grupos));
  }
}