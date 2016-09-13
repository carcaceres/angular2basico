import { Component } from '@angular/core';
import {Pelicula} from "./model/Pelicula";
@Component({
  selector: 'my-app',
  templateUrl: "app/view/peliculas.html"
})

export class AppComponent {

public titulo="CARTELERA DE PELICULAS CON ANGULAR";
public pelicula:Pelicula;
public pelicula2:Pelicula;




constructor(){
 
this.pelicula= new Pelicula(1,"Batman vs Superman","Zack Snider","2016","acción y ficción");
this.pelicula2= new Pelicula(2,"Los Vengadores","Joss Whedon","2012","Ciencia ficción,SuperHeroes");

this.debug();
}

debug(){
  console.log(this.pelicula);
}




 }
