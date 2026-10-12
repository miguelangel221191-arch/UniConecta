import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  onLogin(correoValor: any, claveValor: any) {
    let correoStr = correoValor ? correoValor.toString().trim() : '';
    let nombreUsuario = 'Estudiante UAPA';

    if (correoStr && correoStr.includes('@')) {
      const parte = correoStr.split('@')[0];
      nombreUsuario = parte.charAt(0).toUpperCase() + parte.slice(1);
    } else if (correoStr !== '') {
      nombreUsuario = correoStr;
    }

    // Guardamos los datos para que el perfil y el home los lean bien
    localStorage.setItem('usuarioNombre', nombreUsuario);
    localStorage.setItem('usuarioCorreo', correoStr || 'correo@uapa.edu.do');

    // Navegamos directo al sistema de tabs
    this.router.navigateByUrl('/tabs', { replaceUrl: true });
  }
}