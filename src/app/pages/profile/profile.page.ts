import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfilePage implements OnInit {
  nombreEstudiante: string = 'Estudiante';
  correoEstudiante: string = 'correo@uapa.edu.do';
  
  estadoRed: string = 'ONLINE (Conectado)';
  colorBadge: string = 'success';

  constructor(private router: Router) {}

  ngOnInit() {
    this.cargarDatosPerfil();
    this.verificarConexionRed();
  }

  ionViewWillEnter() {
    this.cargarDatosPerfil();
    this.verificarConexionRed();
  }

  cargarDatosPerfil() {
    const nombreGuardado = localStorage.getItem('usuarioNombre');
    const correoGuardado = localStorage.getItem('usuarioCorreo');

    if (nombreGuardado) {
      this.nombreEstudiante = nombreGuardado;
    }
    if (correoGuardado) {
      this.correoEstudiante = correoGuardado;
    }
  }

  verificarConexionRed() {
    // Verificación inicial
    this.actualizarEstadoRed(navigator.onLine);

    // Escuchamos los eventos del navegador
    window.addEventListener('online', () => this.actualizarEstadoRed(true));
    window.addEventListener('offline', () => this.actualizarEstadoRed(false));

    // Verificación constante cada 2 segundos por seguridad para asegurar que reaccione al apagar el Wi-Fi
    setInterval(() => {
      this.actualizarEstadoRed(navigator.onLine);
    }, 2000);
  }

  actualizarEstadoRed(enLinea: boolean) {
    if (enLinea) {
      this.estadoRed = 'ONLINE (Conectado)';
      this.colorBadge = 'success'; // Verde
    } else {
      this.estadoRed = 'OFFLINE (Sin Conexión)';
      this.colorBadge = 'danger'; // Rojo
    }
  }

  cerrarSesion() {
    localStorage.removeItem('usuarioNombre');
    localStorage.removeItem('usuarioCorreo');
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}