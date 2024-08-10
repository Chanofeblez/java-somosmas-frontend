
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, delay, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

const cabecera = {headers: new HttpHeaders({'Content-Type':'application/json'})};
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  private http = inject( HttpClient );

  constructor() { }

  public confirmar(id: string): Observable<string>{
    return this.http.post<string>(base_url+`/stripe/confirm/${id}`,{},cabecera);
  }

  public cancelar(id: string): Observable<string>{
    return this.http.post<string>(base_url+`/stripe/cancel/${id}`,{},cabecera);
  }

  public getCustomerByEmail(email: string): Observable<boolean>{
    console.log("Chequeo de Stripe 22");

    const url = `${ base_url }/stripe/webhook/created`;
    const body = { email: email };
    return this.http.post<boolean>(url, body);

  }
}
