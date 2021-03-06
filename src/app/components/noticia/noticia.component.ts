import { Component, OnInit, Input } from '@angular/core';
import { Datum } from '../../interfaces/interfaces';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from '../../services/data-local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Datum;
  @Input() i: number;
  @Input() enFavs = false;

  constructor(
    private iab: InAppBrowser,
    private actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing,
    private dataLocal: DataLocalService,
    private router: Router
  ) { }

  ngOnInit() {}

  abrirNoticia() {
    console.log(this.noticia.link);
    console.log(this.noticia.id);
    // const browser = this.iab.create('http://beta.sardarabad.com.ar' + this.noticia.link, '_system');
    this.router.navigate(['/nota', this.noticia.id ]);
  }

  async lanzarMnu() {

    let guardarBorrarBtn;

    if ( this.enFavs ) {

      guardarBorrarBtn = {
        text: 'Borrar Favoritos',
        icon: 'trash',
        handler: () => {
          console.log('Borrar Favoritos');
          this.dataLocal.borrarNoticia( this.noticia );
        }
      };

    } else {

      guardarBorrarBtn = {
        text: 'Favoritos',
        icon: 'star',
        handler: () => {
          console.log('Favoritos');
          this.dataLocal.guardarNoticia( this.noticia );
        }
      };

    }

    const actionSheet = await this.actionSheetCtrl.create({

      buttons: [
      {
        text: 'Compartir',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
          this.socialSharing.share(
            this.noticia.nombre,
            this.noticia.Categoria.nombre,
            '',
            'http://sardarabad.com.ar' + this.noticia.link
          );
        }
      },
      guardarBorrarBtn,
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

  }

}
