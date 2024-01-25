import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interfaces';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-form.interfaces';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class MiembroService {

  constructor(private http: HttpClient) { }

  crearMiembro( formData: RegisterForm ){

    return this.http.post(`${ base_url }/miembros/register`, formData);
    
  }

  loginMiembro( formData: LoginForm ){

    return this.http.post(`${ base_url }/miembros/login`, formData);
}
}
