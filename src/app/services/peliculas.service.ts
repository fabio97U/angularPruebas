import { Injectable } from "@angular/core";
import { Pelicula } from '../models/peliculas';

@Injectable() export class PeliculaService {

    holaMundo(): string {
        return "holaMundo: String(){";
    }

    getPeliculas() {
        return [
            new Pelicula("Pelicula 1", 2010, "https://admin.google.com/u/1/ac/images/logo.gif?uid=117000724569907097987&service=google_gsuite"),
            new Pelicula("Pelicula 2", 2011, "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB&psig=AOvVaw0h2kpjlWCuhMhgeCPPHeiW&ust=1634482908401000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOD29bqZz_MCFQAAAAAdAAAAABAD"),
            new Pelicula("Pelicula 3", 2012, "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"),
            new Pelicula("Pelicula 4", 2013, "https://avatars.githubusercontent.com/u/23263297?v=4"),
        ];
    }
}