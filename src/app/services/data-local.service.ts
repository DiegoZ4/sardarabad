import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Datum } from '../interfaces/interfaces';


import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Datum[] = [];

  constructor(
    private storage: Storage,
    public toastCtrl: ToastController
  ) {
    this.cargarNoticia();
  }

  guardarNoticia( noticia: Datum) {

    const existe = this.noticias.find( noti => noti.nombre === noticia.nombre);

    if ( !existe ) {
      this.noticias.unshift (noticia);
      console.log(this.noticias);
      this.storage.set('favoritos', this.noticias);
      this.presentToast('Noticia agregada a Favoritos');
    }else{
      this.presentToast('Ya agregaste esta noticia a Favoritos');
    }


  }

  async cargarNoticia( ) {

    const favoritos = await this.storage.get('favoritos');

    if (favoritos ) {
      this.noticias = favoritos;
    }

  }

  borrarNoticia( noticia: Datum ) {

    this.noticias = this.noticias.filter( noti => noti.nombre !== noticia.nombre );
    this.storage.set('favoritos', this.noticias);

    this.presentToast('Noticia eliminada de Favoritos');

  }

  async presentToast( message ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
