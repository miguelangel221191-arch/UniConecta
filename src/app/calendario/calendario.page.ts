import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SesionClase {
  fecha: string;
  nombreClase: string;
}

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CalendarioPage implements OnInit {
  // Lista inicial de sesiones por defecto + las que agregue el usuario
  sesiones: SesionClase[] = [
    { fecha: '18 Septiembre', nombreClase: 'Programación de Dispositivos Móviles' },
    { fecha: '20 Septiembre', nombreClase: 'Base de Datos' },
    { fecha: '22 Septiembre', nombreClase: 'Ingeniería Web' }
  ];

  // Campos para el formulario de nueva clase
  nuevaFecha: string = '';
  nuevoNombreClase: string = '';

  constructor() {}

  ngOnInit() {
    this.cargarSesionesGuardadas();
  }

  ionViewWillEnter() {
    this.cargarSesionesGuardadas();
  }

  cargarSesionesGuardadas() {
    const guardadas = localStorage.getItem('misSesionesClases');
    if (guardadas) {
      this.sesiones = JSON.parse(guardadas);
    }
  }

  agregarSesion() {
    if (!this.nuevaFecha.trim() || !this.nuevoNombreClase.trim()) {
      alert('Por favor, completa la fecha y el nombre de la clase.');
      return;
    }

    
    this.sesiones.push({
      fecha: this.nuevaFecha,
      nombreClase: this.nuevoNombreClase
    });

    // Guardamos en localStorage para que persista
    localStorage.setItem('misSesionesClases', JSON.stringify(this.sesiones));

    // Limpiamos los campos
    this.nuevaFecha = '';
    this.nuevoNombreClase = '';
  }

  eliminarSesion(index: number) {
    this.sesiones.splice(index, 1);
    localStorage.setItem('misSesionesClases', JSON.stringify(this.sesiones));
  }
}