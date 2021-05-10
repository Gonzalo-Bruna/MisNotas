import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {

    this.formulario = fb.group({
      titulo:['', [Validators.required]],
      estado:['', [Validators.required]],
      descripcion:['', [Validators.required]]
    });

    this.titulo = this.formulario.get("titulo")?.value;
    this.estado = this.formulario.get("estado")?.value;
    this.descripcion = this.formulario.get("descripcion")?.value;

  }

  ngOnInit(): void {
  }

}
