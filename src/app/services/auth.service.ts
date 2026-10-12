import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Iniciar sesión guardando los datos introducidos por el usuario
  iniciarSesion(correo: string, nombre: string, matricula: string, carrera: string): void {
    const usuarioData = {
      correo: correo || 'estudiante@uapa.edu.do',
      nombre: nombre || 'Estudiante UAPA',
      matricula: matricula || '2026-00001',
      carrera: carrera || 'Ingeniería de Software'
    };
    localStorage.setItem('usuario_activo', JSON.stringify(usuarioData));
  }

  // Obtener el usuario autenticado actual lo mas parecido
  obtenerUsuario() {
    const usuario = localStorage.getItem('usuario_activo');
    if (usuario) {
      return JSON.parse(usuario);
    }
    // Usuario por defecto si entra directamente sin login
    return {
      correo: 'miguel@uapa.edu.do',
      nombre: 'Miguel Ángel',
      matricula: '2023-00123',
      carrera: 'Ingeniería de Software'
    };
  }

  // Cerrar sesión
  cerrarSesion() {
    localStorage.removeItem('usuario_activo');
  }
}