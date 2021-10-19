import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user: any;
  public campo: string = "";
  public campo2: string = "";

  constructor() {
    this.user = {
      nombres: '',
      apellidos: '',
      bio: '',
      genero: ''
    }
  }

  ngOnInit(): void {
  }

  onSumbit(): void {
    console.log(this.user);
  }

  darClic(): void {
    alert("CLIC");
  }

  hasSalido(): void {
    alert("HAZ SALIDO");
  }

  presionoTecla(): void {
    alert("presionoTecla(): void {");
  }
}
