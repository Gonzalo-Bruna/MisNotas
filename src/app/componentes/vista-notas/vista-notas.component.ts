import { Component, OnInit } from '@angular/core';
import { listaNotas, Nota, notaActualizar } from '../../../app/interfaces/nota';

@Component({
  selector: 'app-vista-notas',
  templateUrl: './vista-notas.component.html',
  styleUrls: ['./vista-notas.component.scss']
})
export class VistaNotasComponent implements OnInit {

  notas:Array<Nota> = listaNotas;

  constructor() { }

  ngOnInit(): void {
  }

  eliminarNota(nota:Nota){
    for(let i = 0 ; i < this.notas.length ; i++){
      if(nota == this.notas[i]){
        this.notas.splice(i, 1);
        return;
      } 
    }
  }

  actualizarNota(nota:Nota){
    notaActualizar.push(nota);
  }

}
