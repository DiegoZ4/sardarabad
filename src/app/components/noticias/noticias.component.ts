import { Component, OnInit, Input } from '@angular/core';
import { Datum } from '../../interfaces/interfaces';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {

  @Input() noticias: Datum[] = [];
  @Input() enFavs = false;

  constructor() { }

  ngOnInit() {
    console.log(this.noticias);
  }

}
