import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  //Crear Toast
  async presentToast(mess, ok=false, duration=2000) {
    const toast = await this.toastController.create({
      message: mess,
      duration: ok? null:duration,
      position: "bottom",
    });
    toast.present();
  }
}
