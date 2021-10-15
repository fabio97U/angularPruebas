import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprendiendoAngular...';
  public mostrarPeliculas: boolean;
  constructor() {
    this.mostrarPeliculas = true;
  }

  ocultarPelicula(): void {
    this.mostrarPeliculas = false;
  }
}
