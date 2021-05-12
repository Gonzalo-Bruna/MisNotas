import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Nota, listaNotas, notaActualizar} from '../../../app/interfaces/nota';
@Component({
  selector: 'app-actualizar-nota',
  templateUrl: './actualizar-nota.component.html',
  styleUrls: ['./actualizar-nota.component.scss']
})
export class ActualizarNotaComponent implements OnInit {

  

  formulario:FormGroup;

  constructor( private fb: FormBuilder ) {

    this.formulario = fb.group({
      titulo:['', [Validators.required]],
      estado:['', [Validators.required]],
      descripcion:['', [Validators.required]]
    });

  }

  ngOnInit(): void {
    let nota = notaActualizar[0];
    this.formulario.get("titulo")?.setValue(nota.titulo);
    this.formulario.get("estado")?.setValue(nota.estado);
    this.formulario.get("descripcion")?.setValue(nota.descripcion);

  }

  actualizarNota(){

    let nota = notaActualizar[0];

    for(let i = 0 ; i < listaNotas.length ; i++){

      if(listaNotas[i] === nota){
        nota.titulo = this.formulario.get("titulo")?.value;
        nota.estado = this.formulario.get("estado")?.value;
        nota.descripcion = this.formulario.get("descripcion")?.value;
        notaActualizar.splice(0, 1);
      }

    }

  }

}
