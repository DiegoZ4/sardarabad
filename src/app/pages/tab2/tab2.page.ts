import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { SardaService } from '../../services/sarda.service';
import { Categoria, Datum } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  @ViewChild(IonSegment, {static: false}) segment: IonSegment;

  secciones: Categoria[] = [];

  noticias: Datum[] = [];


  constructor(
    private sardaService: SardaService
  ) {}

  ngOnInit(){

    this.sardaService.getSecciones()
        .subscribe( (resp: any) => {
          this.secciones = resp.data;

          this.segment.value = this.secciones[0].id.toString();

          this.cargarNoticias( this.segment.value );

        });
  }

  cambioCategoria(e) {

    this.noticias = [];
    this.cargarNoticias( e.detail.value );

  }


  cargarNoticias( categoria: string, event?){

    this.sardaService.getNoticiasCategorias( categoria )
        .subscribe( (resp2: any) => {
          console.log(resp2.data);


          if ( resp2.data ) {

            this.noticias.push( ...resp2.data );

            if ( event ){
              event.target.complete();
            }
          }else{
            if ( event ){
              console.log('no trae nada');
              // event.target.disabled = true;
              event.target.complete();
            }
          }


        });

  }

  loadData(event){
    console.log('entra en load')
    this.cargarNoticias( this.segment.value, event );

  }
}
