import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonButton, 
  IonIcon, 
  IonButtons, 
  IonBackButton 
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { camera, qrCode, refresh, imageOutline } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { BarcodeScanner, BarcodeFormat } from '@capacitor-mlkit/barcode-scanning';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonButton, 
    IonIcon, 
    IonButtons, 
    IonBackButton
  ]
})
export class CamaraPage implements OnInit {

  imagenCapturada: string | null = null;
  resultadoQR: string = 'Ningún código escaneado aún';
  modoEscaneo: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {
    addIcons({ camera, qrCode, refresh, imageOutline });
  }

  async ngOnInit() {
    try {
      await BarcodeScanner.requestPermissions();
    } catch (e) {
      console.log('Permisos de cámara / QR no concedidos automáticamente', e);
    }
  }

  // Captura real de foto con @capacitor/camera (Notas / Apuntes)
  async tomarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      });

      this.imagenCapturada = image.webPath || null;
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Error al capturar la foto:', error);
    }
  }

  // Escaneo real de Código QR usando Google ML Kit (@capacitor-mlkit/barcode-scanning)
  async escanearQR() {
    try {
      this.modoEscaneo = true;
      this.cdr.detectChanges();

      const { barcodes } = await BarcodeScanner.scan({
        formats: [BarcodeFormat.QrCode],
      });

      this.modoEscaneo = false;

      if (barcodes && barcodes.length > 0) {
        
        this.resultadoQR = barcodes[0].displayValue || barcodes[0].rawValue || 'Código QR sin texto legible';
      } else {
        this.resultadoQR = 'No se detectó ningún código QR';
      }
      
      this.cdr.detectChanges();
    } catch (error) {
      this.modoEscaneo = false;
      console.error('Error al escanear QR:', error);
      this.resultadoQR = 'Escaneo cancelado o error de hardware';
      this.cdr.detectChanges();
    }
  }

  limpiarTodo() {
    this.imagenCapturada = null;
    this.resultadoQR = 'Ningún código escaneado aún'; // Corregido el error de tipo `: string`
    this.cdr.detectChanges();
  }
}