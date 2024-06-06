import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EventoForm } from '../interfaces/evento-form.interfaces';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) { }

  crearEvento( formData: EventoForm ){

    return this.http.post(`${ base_url }/eventos/create`, formData);
    
  }  

  getEvento( formData: Number ){

  //return this.http.get(`${ base_url }/eventos`, formData);
}

  getEventos( ){

  return this.http.get(`${ base_url }/eventos`);
}
}