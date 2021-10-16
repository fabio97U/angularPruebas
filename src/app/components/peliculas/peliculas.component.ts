//HOOKS: Eventos en angular
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/peliculas';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Array<Pelicula>;

  constructor() {
    this.titulo = "COMPONENTE PELICULA";
    this.peliculas = [
      new Pelicula("Pelicula 1", 2010, "https://admin.google.com/u/1/ac/images/logo.gif?uid=117000724569907097987&service=google_gsuite"),
      new Pelicula("Pelicula 2", 2011, "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB&psig=AOvVaw0h2kpjlWCuhMhgeCPPHeiW&ust=1634482908401000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOD29bqZz_MCFQAAAAAdAAAAABAD"),
      new Pelicula("Pelicula 3", 2012, "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"),
      new Pelicula("Pelicula 4", 2013, "https://avatars.githubusercontent.com/u/23263297?v=4"),
    ];

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
    console.log(this.peliculas);
    console.log("ngOnInit(): void LANZADO");
  }

  cambiarTitulo(param: string): void {
    this.titulo = "CAMBIO TITULO " + param;
  }

}
