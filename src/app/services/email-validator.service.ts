import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { delay, Observable, of } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable({ providedIn: 'root' })
export class EmailValidator implements AsyncValidator{

  private readonly baseUrl: string = environment.base_url;
  private http = inject( HttpClient );

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;
    console.log({email});

    //return this.http.get<string>(`${ this.baseUrl }/api/members`)
    return of({
      emailTaken:true
    }).pipe(
      delay(2000)
    );
  }
}
