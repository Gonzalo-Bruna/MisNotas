import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioNotasService {

  url:string = "http://localhost/misNotas/backend";

  constructor(private servicio:HttpClient) { }
}
