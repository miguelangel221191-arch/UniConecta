import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nfc',
  templateUrl: './nfc.page.html',
  styleUrls: ['./nfc.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NfcPage implements OnInit {
  nombreUsuario: string = 'Estudiante';
  correoUsuario: string = 'correo@uapa.edu.do';
  mensajeEscaneo: string = 'Acerca tu dispositivo al lector o simula la lectura';

  constructor(private router: Router) {}

  ngOnInit() {
    this.cargarDatosUsuario();
  }

  ionViewWillEnter() {
    this.cargarDatosUsuario();
  }

  cargarDatosUsuario() {
    const nombreGuardado = localStorage.getItem('usuarioNombre');
    const correoGuardado = localStorage.getItem('usuarioCorreo');

    if (nombreGuardado) {
      this.nombreUsuario = nombreGuardado;
    }
    if (correoGuardado) {
      this.correoUsuario = correoGuardado;
    }
  }

  escanearNfc() {
    this.mensajeEscaneo = `¡Acceso Concedido para ${this.nombreUsuario}!`;
  }

  regresarHome() {
    this.router.navigateByUrl('/tabs/home');
  }
}