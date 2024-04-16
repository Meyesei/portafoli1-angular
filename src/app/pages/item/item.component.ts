import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
// import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})

export class ItemComponent implements OnInit {
  //  producto: ProductoDescripcion;
 producto: ProductoDescripcion | undefined;

//  id: string;
  id: string | undefined;

  //para poder leer el url necesito importar este servicio
  constructor( private route: ActivatedRoute,
               public productoService: ProductosService ) {}

  ngOnInit() {
    //llamamos la instruccion
    this.route.params
        .subscribe( parametros => {
      //console.log(parametros['id'])//para leer los parametros que llegan por el url
      //el suscribe va a estar pendiente con todos los cambios que sucedan con los parametros del url

      this.productoService.getProducto(parametros['id'])
          .subscribe( (producto: any) => {
            this.id = parametros['id'];
            this.producto = producto;
            // console.log(producto);
        });
    });
  }
}
