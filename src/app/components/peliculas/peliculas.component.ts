//HOOKS: Eventos en angular
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;

  constructor() {
    this.titulo = "COMPONENTE PELICULA";
    console.log("Contrusturo lanzado");
  }

  //Cuando se destruye el componente, cuando el componenete va ser eliminado del DOM
  ngOnDestroy(): void {
    console.log("ngOnDestroy(): void");
  }

  //Cuando se produce algun cambio
  ngDoCheck(): void {
    console.log("ngDoCheck(): void LANZADO");
  }

  //Cuando se inicializa el componente, se ejecuta luego del constructor
  ngOnInit(): void {
    console.log("ngOnInit(): void LANZADO");
  }

  cambiarTitulo(param: string): void {
    this.titulo = "CAMBIO TITULO " + param;
  }

}
