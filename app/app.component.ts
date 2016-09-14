import { Component } from '@angular/core';
import {Pelicula} from "./model/Pelicula";
@Component({
  selector: 'my-app',
  templateUrl: "app/view/peliculas.html",
  styleUrls: ["../assets/css/style.css"]
})

export class AppComponent {

public titulo="CARTELERA DE PELICULAS CON ANGULAR";
public pelicula:Pelicula;
public pelicula2:Pelicula;
public mostrarDatos:boolean;
public peliculas;



constructor(){
this.mostrarDatos=false;
this.pelicula= new Pelicula(1,"Batman vs Superman","Zack Snider",2016,"acción y ficción");
this.pelicula2= new Pelicula(2,"Los Vengadores","Joss Whedon",2012,"Ciencia ficción,SuperHeroes");
this.peliculas=[
new Pelicula(1,"Batman vs Superman","Zack Snider",2016,"acción y ficción");
new Pelicula(2,"Los Vengadores","Joss Whedon",2012,"Ciencia ficción,SuperHeroes"),
new Pelicula(3,"Los Vengadores 2","Joss Whedon",2012,"Ciencia ficción,SuperHeroes"),
new Pelicula(4,"Los civil war","Joss Whedon",2011,"Ciencia ficción,SuperHeroes"),
new Pelicula(5,"Los ant-man","Joss Whedon",2013,"Ciencia ficción,SuperHeroes")
];

//this.debug();
}

debug(){

      console.log(this.pelicula);
 

}

onShowHide(valor:boolean){
  this.mostrarDatos=valor;
}


 }

