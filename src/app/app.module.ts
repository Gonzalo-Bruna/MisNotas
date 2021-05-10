import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearNotaComponent } from './componentes/crear-nota/crear-nota.component';
import { VistaNotasComponent } from './componentes/vista-notas/vista-notas.component';
import { ActualizarNotaComponent } from './componentes/actualizar-nota/actualizar-nota.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearNotaComponent,
    VistaNotasComponent,
    ActualizarNotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
