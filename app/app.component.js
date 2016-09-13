"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Pelicula_1 = require("./model/Pelicula");
var AppComponent = (function () {
    function AppComponent() {
        this.titulo = "CARTELERA DE PELICULAS CON ANGULAR";
        this.mostrarDatos = false;
        this.pelicula = new Pelicula_1.Pelicula(1, "Batman vs Superman", "Zack Snider", 2016, "acción y ficción");
        this.pelicula2 = new Pelicula_1.Pelicula(2, "Los Vengadores", "Joss Whedon", 2012, "Ciencia ficción,SuperHeroes");
        this.peliculas = [
            new Pelicula_1.Pelicula(2, "Los Vengadores", "Joss Whedon", "", "Ciencia ficción,SuperHeroes"),
            new Pelicula_1.Pelicula(3, "Los Vengadores 2", "Joss Whedon", "", "Ciencia ficción,SuperHeroes"),
            new Pelicula_1.Pelicula(4, "Los civil war", "Joss Whedon", 2011, "Ciencia ficción,SuperHeroes"),
            new Pelicula_1.Pelicula(5, "Los ant-man", "Joss Whedon", 2013, "Ciencia ficción,SuperHeroes")
        ];
        //this.debug();
    }
    AppComponent.prototype.debug = function () {
        console.log(this.pelicula);
    };
    AppComponent.prototype.onShowHide = function (valor) {
        this.mostrarDatos = valor;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "app/view/peliculas.html",
            styleUrls: ["../assets/css/style.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map