import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  cargando = true; //CUANDO SE INICIALIZA EL CONSTRUCTOR DE MI CLASE, SE INICIALIZA
  productos: Producto[] = [];

  //haciendo peticiones http a firebase, por eso lo inyecto
  constructor( private http: HttpClient ) {
    this.cargarProductos();
  }


  private cargarProductos() {//definicion de la peticion
    this.http.get('https://mey-angular-html-eda9d-default-rtdb.firebaseio.com/productos_idx.json')
  
    //esta respuesta es un arregrlo de mis items o productos
     .subscribe( (resp: any ) => {

      console.log(resp);
      this.productos = resp;
      

      setTimeout(() => {
        this.cargando = false;//DEJA DE CARGAR CUANDO OBTENGO LA RESPUESTA
      }, 2000);

     });
  }

}
