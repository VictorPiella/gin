import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GinService {


  private url = 'https://the-perfect-gin.firebaseio.com/';


  constructor(private http: HttpClient) { }


    getGin( id: string ) {

      return this.http.get(`${ this.url }/gins/${ id }.json`);

    }

  }


  // getHeroes() {
  //   return this.http.get(`${ this.url }/heroes.json`)
  //           .pipe(
  //             map( this.crearArreglo ),
  //             delay(0)
  //           );
  // }

  // private crearArreglo( heroesObj: object ) {

  //   const heroes: HeroeModel[] = [];

  //   Object.keys( heroesObj ).forEach( key => {

  //     const heroe: HeroeModel = heroesObj[key];
  //     heroe.id = key;

  //     heroes.push( heroe );
  //   });


  //   return heroes;

  // }
