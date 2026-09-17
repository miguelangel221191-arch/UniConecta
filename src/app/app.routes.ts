import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    
    path: '',
redirectTo: 'login',
pathMatch: 'full',

  },
  {
    path: 'bluetooth',
    loadComponent: () => import('./bluetooth/bluetooth.page').then( m => m.BluetoothPage)
  },
  {
    path: 'nfc',
    loadComponent: () => import('./nfc/nfc.page').then( m => m.NfcPage)
  },
  {
    path: 'wifi',
    loadComponent: () => import('./wifi/wifi.page').then( m => m.WifiPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'grupos',
    loadComponent: () => import('./grupos/grupos.page').then( m => m.GruposPage)
  },
  {
    path: 'chat',
    loadComponent: () => import('./chat/chat.page').then( m => m.ChatPage)
  },
  {
    path: 'calendario',
    loadComponent: () => import('./calendario/calendario.page').then( m => m.CalendarioPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },
];
