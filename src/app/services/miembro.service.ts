import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../interfaces/members';
import { HttpClient } from '@angular/common/http';
import { RegisterResponse } from '../interfaces/register-form.interfaces';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  public members: Member[] = [];
  public member?: Member;


  private http = inject(HttpClient);


//Get All Members From DB
  getMiembros( ): Member[]{
    this.http.get<Member[]>(`${ base_url }/api/members`)
  .subscribe(members => {
    this.members = members;
   });
   return this.members;
}

}
