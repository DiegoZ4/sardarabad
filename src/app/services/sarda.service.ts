import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Datum } from '../interfaces/interfaces';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SardaService {


  URL_API = `https://www.sardarabad.com.ar/api/end-points/mobile`;


  headers = new HttpHeaders({
     'Access-Control-Allow-Origin': '*',
     'Content-Type': 'application/json',
     'Valid-end-point-request': 'AguanteMessi'
  });
  // https://gateway.marvel.com:443/v1/public/characters?name=Iron%20man&apikey=6dffe3f0816365c88d8469aef4d5201b

  categoriaPage = 0;
  categoriaActual = '';
  categoriaTotal = 0;

  constructor(
    private http: HttpClient
  ) { }


  getNoticias(){

    return this.http.get<Datum>(`${this.URL_API}/tapa`, { headers: this.headers });
  }

  getSecciones(){
    return this.http.get<Datum>(`${this.URL_API}/categorias`, { headers: this.headers });
  }

  getNoticiasCategorias( id: string){

    if ( this.categoriaActual === id) {
      this.categoriaPage++;
    }else{
      this.categoriaPage = 1;
      this.categoriaActual = id;
    }

    return this.http.get(`${this.URL_API}/notas/categoria/${id}&page=${ this.categoriaPage }`, { headers: this.headers }).pipe(
        map( (resp: any) => {
          // return resp;
          console.log(resp);
          if ( resp.last_page >= this.categoriaPage){
            return resp;
          }

          return [];
        })
      );

  }

  getNoticiasIdioma( lng ){

    return this.http.get<Datum>(`${this.URL_API}/notas/idioma/${ lng }`, { headers: this.headers });
  }
}
