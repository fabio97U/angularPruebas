import { Component } from "@angular/core";

@Component({
    selector: "mi-componente",
    templateUrl: "./mi-Componente.component.html"
})
export class MiComponente {
    public titulo: string;
    public numero: number;

    constructor() {
        console.log("Mi componente cargado");
        this.titulo = "PRUEBAAAAAAAAAA";
        this.numero = 10;
    }
}