
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
providedIn: 'root'
})
export class OfflineService {
private STORAGE_KEY = 'datosOffline';
constructor(private storage: Storage) {
this.init();
}
async init() {
await this.storage.create();
}
async guardarDato(dato: any) {
let datos =
await this.storage.get(this.STORAGE_KEY);
if (!datos) {
datos = [];
}
datos.push(dato);
await this.storage.set(
this.STORAGE_KEY,
datos
);
console.log('Dato guardado localmente');
}
async obtenerDatos() {
return await this.storage.get(
this.STORAGE_KEY
) || [];
}
async limpiarDatos() {
await this.storage.set(
this.STORAGE_KEY,
[]
);
}
}