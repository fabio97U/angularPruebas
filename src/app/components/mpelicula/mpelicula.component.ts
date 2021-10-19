import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../models/peliculas';

@Component({
  selector: 'app-mpelicula',
  templateUrl: './mpelicula.component.html',
  styleUrls: ['./mpelicula.component.css']
})
export class MpeliculaComponent implements OnInit {

  @Input() p: Pelicula = new Pelicula("", 0, "");
  @Output() MarcarFavorita = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  seleccionar(event: any, p: Pelicula): void {
    this.MarcarFavorita.emit({ pelicula: p });
  }

}
