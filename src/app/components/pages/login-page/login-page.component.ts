import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Member } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);
  private authService = inject( AuthService );
  private router = inject( Router );

  public myForm: FormGroup = this.fb.group({
    email: [ 'chano.feblez@yahoo.com',[Validators.required, Validators.email]],
    password: ['somosmas1234',[Validators.required, Validators.minLength(8)]],
    remember: [false]
  });


  login(){
    const{ email, password, remember } = this.myForm.value;

    this.authService.login(email, password, remember )
      .subscribe({
        next: () => this.router.navigateByUrl('/home'),
        error: (message) => {
          console.log({ loginError: message});
          Swal.fire('Error', message, 'error')
        }
      })


  }
}
