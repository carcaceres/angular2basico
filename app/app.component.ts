import { Component } from '@angular/core';
import {Pelicula} from "./model/Pelicula";
@Component({
  selector: 'my-app',
  templateUrl: "app/view/peliculas.html"
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
