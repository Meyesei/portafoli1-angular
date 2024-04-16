import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/infoPagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit{



constructor (public _servicio: InfoPaginaService,
  private router: Router) {}//para hacer la navegacion interna en los componentes

ngOnInit() {
  
}

// implementando el metodo buscarProducto
buscarProducto(termino: string){

  if (termino.length < 1) {
    return
  }

  //HACEMOS LA NAVEGACION
this.router.navigate(['/search', termino])//nos pide la ruta usando un arreglo
// console.log(termino)
}

}