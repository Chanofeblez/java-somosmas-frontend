import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  private readonly baseUrl: string = environment.base_url;
  private http = inject( HttpClient );

  constructor() {}
}
