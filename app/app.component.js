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
var AppComponent = (function () {
    function AppComponent() {
        this.titulo = "PELICULAR CON ANGULAR";
        this.pelicula = "Batman vs Superman";
        this.director = "Zack Snider";
        this.anio = "2016";
        this.clas = "Acción";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1><strong>{{titulo}}</strong></h1>\n  <ul>\n  <li>\n  <strong>\n  Pelicula: {{pelicula}}\n  </strong>\n  </li>\n  <li>\n  <strong>\n  director: {{director}}\n  </strong>\n  </li>\n  \n  <li>\n  <strong>\n  A\u00F1o: {{anio}}\n  </strong>\n  </li>\n\n  <li>\n  <strong>\n  Tipo: {{clas}}\n  </strong>\n  </li>\n  </ul>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var AppComponent2 = (function () {
    function AppComponent2() {
    }
    return AppComponent2;
}());
exports.AppComponent2 = AppComponent2;
//# sourceMappingURL=app.component.js.map