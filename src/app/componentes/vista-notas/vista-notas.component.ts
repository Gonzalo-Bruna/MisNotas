import { Component, OnInit } from '@angular/core';
import { listaNotas, Nota, notaActualizar } from '../../../app/interfaces/nota';
import { ServicioNotasService } from '../../../app/servicios/servicio-notas.service';

@Component({
  selector: 'app-vista-notas',
  templateUrl: './vista-notas.component.html',
  styleUrls: ['./vista-notas.component.scss']
})
export class VistaNotasComponent implements OnInit {

  notas:Array<Nota> = listaNotas;

  constructor(private servicio:ServicioNotasService) { }

  ngOnInit(): void {

    this.servicio.recibirDatos().subscribe( datos => {
      //console.log(datos);
      for(let i = 0 ; i < datos.length ; i++){
        listaNotas[i] = datos[i];
      }
    });
    
  }

  eliminarNota(nota:Nota){
    for(let i = 0 ; i < this.notas.length ; i++){
      if(nota == this.notas[i]){
        this.notas.splice(i, 1);
        //console.log(this.notas);
        this.servicio.guardarDatos(this.notas).subscribe(datos => {
          console.log(datos);
        });
        return;
      } 
    }
  }

  actualizarNota(nota:Nota){
    notaActualizar[0] = nota;
  }

}
