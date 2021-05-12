import { Component, OnInit } from '@angular/core';
import { Nota } from '../../../app/interfaces/nota';
@Component({
  selector: 'app-actualizar-nota',
  templateUrl: './actualizar-nota.component.html',
  styleUrls: ['./actualizar-nota.component.scss']
})
export class ActualizarNotaComponent implements OnInit {

  nota:Nota = history.state.data;
  titulo:string = this.nota.titulo;
  descripcion:string = this.nota.descripcion;

  constructor() { }

  ngOnInit(): void {
  }

}
