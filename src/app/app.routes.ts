import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  }, 
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
      },
      {
        path: 'groups',
        loadComponent: () => import('./pages/groups/groups.page').then(m => m.GroupsPage)
      },
      {
        path: 'map',
        loadComponent: () => import('./pages/map/map.page').then(m => m.MapPage)
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.page').then(m => m.ProfilePage)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'bluetooth',
    loadComponent: () => import('./bluetooth/bluetooth.page').then(m => m.BluetoothPage)
  },
  {
    path: 'nfc',
    loadComponent: () => import('./nfc/nfc.page').then(m => m.NfcPage)
  },
  {
    path: 'wifi',
    loadComponent: () => import('./wifi/wifi.page').then(m => m.WifiPage)
  },
  {
    path: 'chat',
    loadComponent: () => import('./chat/chat.page').then(m => m.ChatPage)
  },
  {
    path: 'calendario',
    loadComponent: () => import('./calendario/calendario.page').then(m => m.CalendarioPage)
  },
  {
  path: 'noticias',
  loadComponent: () => import('./noticias/noticias.page').then(m => m.NoticiasPage)
},
{
  path: 'podcasts',
  loadComponent: () => import('./podcasts/podcasts.page').then(m => m.PodcastsPage)
},
{
  path: 'camara',
  loadComponent: () => import('./camara/camara.page').then(m => m.CamaraPage)
}
];