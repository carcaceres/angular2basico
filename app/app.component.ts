import { Component } from '@angular/core';
import {Pelicula} from "./model/Pelicula";
@Component({
  selector: 'my-app',
  template: `<h1><strong>{{titulo}}</strong></h1>
  <ul>
  <li>
  <strong>
  Pelicula: {{pelicula.id}}
  </strong>
  </li>
  <li>
  <strong>
  Pelicula: {{pelicula.titulo}}
  </strong>
  </li>
  <li>
  <strong>
  director: {{pelicula.director}}
  </strong>
  </li>
  
  <li>
  <strong>
  Año: {{pelicula.anio}}
  </strong>
  </li>

  </ul>`
})

export class AppComponent {

public titulo="CARTELERA DE PELICULAS CON ANGULAR";
public pelicula:Pelicula;





constructor(){
 
this.pelicula= new Pelicula(1,"Batman vs Superman","Zack Snider","2016");
this.debug();
}

debug(){
  console.log(this.pelicula);
}




 }
