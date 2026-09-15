import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
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
];
