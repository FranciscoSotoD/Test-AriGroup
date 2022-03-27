import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mensaje: string;
  mostrarError: boolean = false;

  constructor(public alertController: AlertController) {
    // console.log(this.mensaje);
  }
  async enviarMensaje() {
    if(this.mensaje == null || this.mensaje == undefined || this.mensaje == "" ) {
      this.mostrarError = true;
    } else {
      this.mostrarError = false;
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Bienvenido',
        message: this.mensaje,
        buttons: ['OK']
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);

      this.mensaje = '';
    }
  }

}
