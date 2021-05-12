import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Nota, listaNotas} from '../../../app/interfaces/nota';
@Component({
  selector: 'app-actualizar-nota',
  templateUrl: './actualizar-nota.component.html',
  styleUrls: ['./actualizar-nota.component.scss']
})
export class ActualizarNotaComponent implements OnInit {

  nota:Nota = history.state.data;
  titulo:string = this.nota.titulo;
  descripcion:string = this.nota.descripcion;
  estado:number = this.nota.estado;

  formulario:FormGroup;

  constructor( private fb: FormBuilder ) {

    this.formulario = fb.group({
      titulo:['', [Validators.required]],
      estado:['', [Validators.required]],
      descripcion:['', [Validators.required]]
    });

  }

  ngOnInit(): void {

    this.formulario.get("titulo")?.setValue(this.titulo);
    this.formulario.get("estado")?.setValue(this.estado);
    this.formulario.get("descripcion")?.setValue(this.descripcion);

  }

  actualizarNota(){

    for(let i = 0 ; i < listaNotas.length ; i++){

      if(listaNotas[i] === this.nota){
        console.log("encontrado");

      }

    }

  }

}
