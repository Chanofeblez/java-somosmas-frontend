import { computed, inject, Injectable, signal } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, delay, map, Observable, of, tap, throwError } from "rxjs";
import { AuthStatus, LoginResponse, Member } from "../interfaces";
import { MemberService } from "./miembro.service";
import { RegisterResponse } from "../interfaces/register-form.interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  private members: Member[] = [];

  private readonly baseUrl: string = environment.base_url;
  private http = inject( HttpClient );
  private memberService = inject( MemberService );

  private _currentUser = signal<String|null>(null);
  private _authStatus = signal<AuthStatus>( AuthStatus.checking );

  public currentUser = computed( () => this._currentUser());
  public authStatus = computed ( () => this._authStatus());

  constructor() {
      this.checkAuthStatus();
    }

  private setAuthentication(email: string, remember: boolean){

    console.log(email);

    this._currentUser.set(email);
    this._authStatus.set(AuthStatus.authenticated);
    if(remember){
      this.logout();
      console.log(email);
      localStorage.setItem('member', email );
    }
    return true;
  }

  login( email: string, password: string, remember: boolean):Observable<boolean>{

    const url = `${ this.baseUrl }/auth/login`;
    const body = {email, password};

    return this.http.post<LoginResponse>( url, body )
      .pipe(
        map( ({ username, jwt }) => this.setAuthentication(username, remember )),
        //Todo: errors
        catchError( err => {
          console.log(err);
          return throwError( () => 'Wrong email or password');
        })
      );

  }

  logout() {
    console.log("Log2");
    localStorage.removeItem('member');
    this._currentUser.set(null);
    this._authStatus.set(AuthStatus.notAuthenticated);
  }

  //Create Member
  createMember(nombre: string, primerApellido: string, segundoApellido: string, telefono: string, email: string, password: string,
                ciudad: string, pais: string):Observable<boolean> {
   const url = `${ this.baseUrl }/api/members`;
   console.log(url);
   const body = {nombre, primerApellido, segundoApellido, telefono, email, password, ciudad, pais};
   console.log(body);

  return this.http.post<Member>( url, body )
    .pipe(
      delay(
        1500
      ),
      map( ({ email }) => this.setAuthentication(email, true )),
      //Todo: errors
      catchError( err => {
        console.log(err);
        return throwError( () => err);
      })
    );

 }

  checkAuthStatus(){
    const email = localStorage.getItem('member');
    console.log(email);

    if(!email) {
      this._authStatus.set(AuthStatus.notAuthenticated);
    }

  //  const headers = new HttpHeaders()
  //    .set('Authorization',`Bearer ${token}`);
  }

  getMemberbyUsername( email : string): Member {

    this.members = this.memberService.getMiembros();
    var pos = 0;
    for(var i = 0; i<this.members.length;i++){
      if (this.members[i].email===email){
        pos=i;
      }
    }
    return this.members[pos];
  }
}
