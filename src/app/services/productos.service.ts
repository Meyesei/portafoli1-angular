import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  cargando = true; //CUANDO SE INICIALIZA EL CONSTRUCTOR DE MI CLASE, SE INICIALIZA
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  //haciendo peticiones http a firebase, por eso lo inyecto
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    //para hacer que esto regrese algo asicrono, quiero que trabaje en base a promesas
    //una promesa es algo asincrono.
    return new Promise((resolve, reject) => {
      //las promesas adentro tienen un callback que recibe 2 argumentos

      //definicion de la peticion
      this.http
        .get(
          'https://mey-angular-html-eda9d-default-rtdb.firebaseio.com/productos_idx.json'
        )

        //esta respuesta es un arregrlo de mis items o productos
        .subscribe((resp: any) => {
          console.log(resp);
          this.productos = resp;

          // setTimeout(() => {
          this.cargando = false; //DEJA DE CARGAR CUANDO OBTENGO LA RESPUESTA
          // }, 2000);

          resolve; //llamo el resolve para indicar que la promesa termino exitosamente
        });
    });
  }

  getProducto(id: string) {
    return this.http.get(
      `https://mey-angular-html-eda9d-default-rtdb.firebaseio.com/productos/${id}.json`
    );
  }

  buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      //si es igual a 0, entonces tenemos que cargar productos
      this.cargarProductos().then(() => {
        //este codigo se va a ejecutar despues de tener los productos
        //aplicar filtro
        this.filtrarProductos(termino);
      });
    } else {
      //Aplicar el filtro
      this.filtrarProductos(termino);
    }
  }



  private filtrarProductos(termino: string) {

    // console.log(this.productos)
    this.productosFiltrado = [];
    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => { 

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0 ) {
        this.productosFiltrado.push(prod);
      }


  });

  }
}
