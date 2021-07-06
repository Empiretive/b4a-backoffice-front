import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppMessagesService } from '../components/app-messages/app-messages.service';

@Injectable({
  providedIn: 'root',
})
export class Image2base64Service {
  img: any;
  constructor(
    private sanitizer: DomSanitizer,
    private msgService: AppMessagesService
  ) {}
  putPhoto(event: any) {
    const img = event.target.files[0];
    if (img.type !== 'image/jpeg' && img.type !== 'image/png') {
      this.msgService.alertShow(
        'Formato de archivo invalido',
        'El archivo debe ser una imagen JPG o PNG',
        () => {
          console.log('alerta');
        }
      );
    } else if (img.size / 1024 > 500) {
      this.msgService.alertShow(
        'El archivo es demasiado pesado',
        'El archivo debe tener un peso no mayor a 5mb'
      );
    } else {
      return this.extraerBase64(img).then((image: any) => {
        this.img = image.base;
        return this.img;
      });
    }
    return;
  }
  extraerBase64 = async ($event: any) =>
    new Promise((resolve, reject) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            base: reader.result,
          });
        };
        reader.onerror = (_error) => {
          resolve({
            base: null,
          });
        };
      } catch (e) {
        return resolve({ base: null });
      }
    });
}
