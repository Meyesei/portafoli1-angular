import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: infoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {
    console.log('Servicio de InfoPagina listo');

    this.cargarInfo();
    this.cargarEquipo();
  }


  //estos metodos(cargarInfo y cargarEquipo ) seran pridados, asi que solo seran visible desde el lado del servicio
private cargarInfo(){

  //modulo para leer un archivo json y tomar sus
    //propiedades para ser utilisados en la paginasS/peticiones http
    this.http.get('assets/data/data-pagina.json')//leer el archivo json
      .subscribe( (resp: infoPagina) => {


      // .subscribe((resp: any) => {

        this.cargada = true;
        this.info = resp;
    

        // });
     });

}

cargarEquipo() {

  //modulo para leer un archivo json y tomar sus
    //propiedades para ser utilisados en la paginasS/peticiones http
    this.http.get('https://mey-angular-html-default-rtdb.firebaseio.com/equipo.json')//leer el archivo json
      .subscribe( (resp: any) => {


      // .subscribe((resp: any) => {

        this.equipo = resp;
     
  

        // });
     });

}

}
