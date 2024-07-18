import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MemberService as MiembroService } from 'src/app/services/miembro.service';
import Swal from 'sweetalert2';
import { Miembro } from '../../models/members.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public formSubmitted = false;
  miembro: Miembro= new Miembro;
  idString : string ="";

  recordarme = () =>{
    if(localStorage.getItem('email')===null){
      return false;
    } else {
      return true;
    }
  }

  public loginForm: FormGroup = this.fb.group({
    email: [ localStorage.getItem('email') || '',[Validators.required, Validators.email]],
    password: ['',[Validators.required]],
    remember: [this.recordarme()]
  });

  constructor(private fb: FormBuilder,
              private miembroService: MiembroService) { }

  ngOnInit(): void {
  }

  autenticar(): void {
    console.log('login');
    this.formSubmitted=true;
    console.log(this.loginForm.value);

    this.miembroService.loginMiembro( this.loginForm.value )
    .subscribe( (resp:any) => {
      console.log('miembro logueado')
      console.log(resp);

      localStorage.setItem('id', resp.id);
      localStorage.setItem('nombre', resp.nombre);
      localStorage.setItem('primerApellido', resp.primerApellido);
      localStorage.setItem('segundoApellido', resp.segundoApellido);
      localStorage.setItem('telefono', resp.telefono);
      localStorage.setItem('ciudad', resp.ciudad);
      localStorage.setItem('pais', resp.pais);

      if( this.loginForm.get('remember')?.value ){
        localStorage.setItem('email', resp.email);
      } else {
        localStorage.removeItem(resp.email);
      }
    }, (err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: ( err.error.message ),
        //footer: '<a href="#">Why do I have this issue?</a>'
      });
    });
  }

  logout() {
    localStorage.removeItem(this.idString);
  }

}
