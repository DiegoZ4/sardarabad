import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SardaService } from '../../services/sarda.service';
import { Datum } from '../../interfaces/interfaces';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from '../../services/data-local.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.page.html',
  styleUrls: ['./nota.page.scss'],
})
export class NotaPage implements OnInit {

  id: any;
  nota = {} as Datum;
  enFavs = false;
  cuerpo: any;
  video: any;
  

  constructor(
    private router: ActivatedRoute,
    private sarda: SardaService,
    private actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing,
    private dataLocal: DataLocalService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {

    this.router.params.subscribe( (resp: any) => {
      console.log(resp);
      this.id = parseInt( resp.id, 10  );
      console.log( this.id );

      this.sarda.getNoticia ( this.id )
          .subscribe ( (resp: any)=> {
            console.log(resp)
            this.nota = resp.data;
            if ( this.nota.video ) {
              this.video = this.sanitizer.bypassSecurityTrustResourceUrl(
                this.nota.video
              );
            }

            resp.data.cuerpo ? this.cuerpo = resp.data.cuerpo : null;
            this.cuerpo.replace('../../../../', 'http://www.sardarabad.com/')
            this.cuerpo = this.sanitizer.bypassSecurityTrustHtml(this.cuerpo);
          })
      
    });
  }

  async lanzarMnu() {

    let guardarBorrarBtn;

    if ( this.enFavs ) {

      guardarBorrarBtn = {
        text: 'Borrar Favoritos',
        icon: 'trash',
        handler: () => {
          console.log('Borrar Favoritos');
          this.dataLocal.borrarNoticia( this.nota );
        }
      };

    } else {

      guardarBorrarBtn = {
        text: 'Favoritos',
        icon: 'star',
        handler: () => {
          console.log('Favoritos');
          this.dataLocal.guardarNoticia( this.nota );
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
            this.nota.nombre,
            this.nota.Categoria.nombre,
            '',
            'http://sardarabad.com.ar' + this.nota.link
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
