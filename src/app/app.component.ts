import { Component } from '@angular/core';
import { InfoPaginaService } from './services/infoPagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor( public InfoPaginaService: InfoPaginaService,
    public productosService: ProductosService){

  }
}
