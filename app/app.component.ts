import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1><strong>{{titulo}}</strong></h1>
  <ul>
  <li>
  <strong>
  Pelicula: {{pelicula}}
  </strong>
  </li>
  <li>
  <strong>
  director: {{director}}
  </strong>
  </li>
  
  <li>
  <strong>
  Año: {{anio}}
  </strong>
  </li>

  </ul>`
})

export class AppComponent {

public titulo="CARTELERA DE PELICULAS CON ANGULAR";




constructor(){
  this.pelicula="Batman vs Superman";
  this.director="Zack Snider";
  this.anio=2016;
  this.saludo("carlos","caceres");

}

holaMundo(){
  alert(this.pelicula+" "+this.director+" "+this.anio);
}

saludo(nombre:string,apellido:string){
  alert("hola soy "+nombre+" "+apellido);
}



 }
