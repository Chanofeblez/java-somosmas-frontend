import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interfaces';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-form.interfaces';
import { Observable } from 'rxjs';
import { Member } from '../interfaces/members';
import { Miembro } from '../components/models/members.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  public members: Member[] = [];

  constructor(private http: HttpClient) { }

  crearMiembro( formData: RegisterForm ){

    return this.http.post(`${ base_url }/miembros/register`, formData);

  }

  loginMiembro( formData: LoginForm ){

    return this.http.post(`${ base_url }/miembros/login`, formData);
}

  getMiembro( formData: Number ){

  //return this.http.get(`${ base_url }/miembros/miembro`, formData);
}

//Get All Members From DB
  getMiembros( ): Member[]{
  this.http.get<Member[]>(`${ base_url }/api/members`)
  .subscribe(members => {
    this.members = members;
   });
   return this.members;
}

}
