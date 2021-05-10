import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Nota, listaNotas } from '../../../app/interfaces/nota';

@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.scss']
})
export class CrearNotaComponent implements OnInit {

  formulario:FormGroup;

  constructor(private fb: FormBuilder) {

    this.formulario = fb.group({
      titulo:['', [Validators.required]],
      estado:['', [Validators.required]],
      descripcion:['', [Validators.required]]
    });
    
  }

  ngOnInit(): void { }

  crearNota(){

    let nota:Nota = {
      titulo: this.formulario.get("titulo")?.value,
      estado: this.formulario.get("estado")?.value,
      descripcion: this.formulario.get("descripcion")?.value
    }

    listaNotas.push(nota);

    console.log(listaNotas);

  }

}
