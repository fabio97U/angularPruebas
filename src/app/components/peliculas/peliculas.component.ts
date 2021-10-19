//HOOKS: Eventos en angular
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/peliculas';

import { PeliculaService } from '../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],

  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Array<Pelicula>;
  public peliculaFavorita: Pelicula = new Pelicula("", 0, "");

  constructor(private _peliculaService: PeliculaService) {
    this.titulo = "COMPONENTE PELICULA";
    this.peliculas = _peliculaService.getPeliculas();

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
    //console.log(this.peliculas);
    console.log("ngOnInit(): void LANZADO");
    console.log("_peliculaService " + this._peliculaService.holaMundo());
  }

  cambiarTitulo(param: string): void {
    this.titulo = "CAMBIO TITULO " + param;
  }

  mostrarFavorita(event: any): void {
    console.log("mostrarFavorita(event: any): void {");
    console.log(event);
    this.peliculaFavorita = event.pelicula;
  }
}
