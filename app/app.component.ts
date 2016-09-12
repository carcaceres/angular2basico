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

public titulo="PELICULAR CON ANGULAR";
public pelicula="Batman vs Superman";
public director="Zack Snider";
public anio="2016";


 }
