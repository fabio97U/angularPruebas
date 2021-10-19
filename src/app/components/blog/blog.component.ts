import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../../services/articulos.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],

  providers: [ArticuloService]
})
export class BlogComponent implements OnInit {

  constructor(private _articuloService: ArticuloService) { }

  ngOnInit(): void {
    this._articuloService.getArticulos().subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

}
