import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Nota, listaNotas } from '../../../app/interfaces/nota';
import { ServicioNotasService } from '../../../app/servicios/servicio-notas.service';

@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.scss']
})
export class CrearNotaComponent implements OnInit {

  formulario:FormGroup;
  titulo:AbstractControl;
  estado:AbstractControl;
  descripcion:AbstractControl;

  constructor(private fb: FormBuilder, private servicio:ServicioNotasService) {

    this.formulario = fb.group({
      titulo:['', [Validators.required]],
      estado:['', [Validators.required]],
      descripcion:['', [Validators.required, Validators.maxLength(150)]]
    });

    this.titulo = this.formulario.controls['titulo'];
    this.estado = this.formulario.controls['estado'];
    this.descripcion = this.formulario.controls['descripcion'];
  }

  ngOnInit(): void { }

  crearNota(){

    let nota:Nota = {
      titulo: this.titulo.value,
      estado: this.estado.value,
      descripcion: this.descripcion.value
    }

    listaNotas.push(nota);

    this.servicio.guardarDatos(listaNotas).subscribe( datos => {
      console.log(datos);
    });

  }

  esValido():boolean{
    return this.titulo.valid && this.estado.valid && this.descripcion.valid;
  }

}
