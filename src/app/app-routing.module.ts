import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarNotaComponent } from '../app/componentes/actualizar-nota/actualizar-nota.component';
import { CrearNotaComponent } from '../app/componentes/crear-nota/crear-nota.component';
import { VistaNotasComponent } from '../app/componentes/vista-notas/vista-notas.component';

const routes: Routes = [
  {path: "", component:CrearNotaComponent},
  {path: "vistaNotas", component:VistaNotasComponent},
  {path: "actualizarNota", component:ActualizarNotaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
