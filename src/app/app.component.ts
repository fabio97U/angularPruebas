import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprendiendoAngular...';
  public mostrarPeliculas: boolean;
  public homeText: string;
  constructor() {
    this.mostrarPeliculas = true;
    this.homeText = "Hola desde componente padre";
  }

  ocultarPelicula(): void {
    this.mostrarPeliculas = false;
  }
}
