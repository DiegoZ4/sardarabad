import { Component, OnInit } from '@angular/core';
import { SardaService } from '../../services/sarda.service';
import { Datum } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Datum[] = [];

  constructor(
    private sardaService: SardaService
  ) {}

  ngOnInit(){

    this.sardaService.getNoticias()
        .subscribe( (resp: any) => {

          console.log(resp);
          this.noticias.push( ...resp.data );

        });
  }

}
