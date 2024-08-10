import { Component, inject, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, AbstractControlOptions } from '@angular/forms';
import { MemberService} from 'src/app/services/miembro.service';
import { RegisterResponse } from 'src/app/interfaces/register-form.interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { Country } from 'src/app/interfaces/country';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StripemodalComponent } from '../../common/stripemodal/stripemodal.component';
import { MatDialog } from '@angular/material/dialog';
import { StripeService } from 'src/app/services/stripe.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  formSubmitted : boolean | null | undefined= false;
  countries: Country[];
  btnSubmit = document.getElementById("btn") as HTMLButtonElement;

  private authService   = inject(AuthService);
  private stripeService = inject(StripeService);
  private fb            = inject( FormBuilder ) ;
  private router        = inject(Router);
  public modalService   = inject(NgbModal);
 // public dialog  = inject(MatDialog);

  firstNameAndLastnamePattern : string = '([a-zA-Z])';//Para validar que en el campo sea nombre y apellido juntos: '([a-zA-Z]+) ([a-zA-Z]+)'
  emailPattern : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  public registerForm: FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.minLength(2)]],
    primerApellido: ['',[Validators.required, Validators.minLength(2)]],
    segundoApellido: ['',[Validators.minLength(2)]],
    email: ['',[Validators.required, Validators.pattern(this.emailPattern)]],
    password1: ['12345678',[Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    password2: ['12345678',[Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    telefono: ['',[Validators.required]],
    ciudad: ['',[Validators.required]],
    pais: ['',[Validators.required]],
    terminos: [true,[Validators.required]],
  }, {
    validator: this.passwordsIguales('password1', 'password2') as AbstractControlOptions
  });

  constructor() {
    this.countries = [
      { code: 'ar', name: 'Argentina' },
      { code: 'au', name: 'Australia' },
      { code: 'br', name: 'Brazil' },
      { code: 'ca', name: 'Canada' },
      { code: 'cn', name: 'China' },
      { code: 'fr', name: 'France' },
      { code: 'de', name: 'Germany' },
      { code: 'in', name: 'India' },
      { code: 'it', name: 'Italy' },
      { code: 'jp', name: 'Japan' },
      { code: 'mx', name: 'Mexico' },
      { code: 'ru', name: 'Russia' },
      { code: 'za', name: 'South Africa' },
      { code: 'es', name: 'Spain' },
      { code: 'gb', name: 'United Kingdom' },
      { code: 'us', name: 'United States' }
    ];

   }

  ngOnInit(): void {
  }

  async autenticar(){

  this.registerForm.markAllAsTouched();
   console.log(this.registerForm.value);
   const{ nombre, primerApellido, segundoApellido, telefono, email, password1,  ciudad, pais } = this.registerForm.value;

   console.log("Vamos a Chequear de Stripe", email);
   this.formSubmitted = await this.stripeService.getCustomerByEmail(email).toPromise();
   console.log("Chequeado de Stripe " , this.formSubmitted );
   if(!this.formSubmitted ){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: ( "You must complete the membership payment." ),
      //footer: '<a href="#">Why do I have this issue?</a>'
    });
    this.abrirModal();
   } else {

    if(this.registerForm.invalid){
      console.log(this.registerForm.hasError);
      return;
    }
    //Realizar posteo
    this.authService.createMember( nombre, primerApellido, segundoApellido, telefono, email, password1,  ciudad, pais )
        .subscribe( (resp:any) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your registration has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          console.log('miembro creado');
          this.registerForm.reset();
          this.router.navigate(['/']);
     //     localStorage.clear();
     //     localStorage.setItem('id', resp.id.toString());
     //     localStorage.setItem('nombre', resp.nombre);
     //     localStorage.setItem('primerApellido', resp.primerApellido);
     //     localStorage.setItem('segundoApellido', resp.segundoApellido);
     //     localStorage.setItem('telefono', resp.telefono);
     //     localStorage.setItem('ciudad', resp.ciudad);
     //     localStorage.setItem('pais', resp.pais);
     //     localStorage.setItem('rol', resp.unRol);
     //     localStorage.setItem('email', resp.email);
        }, (err) => {
          console.log(err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: ( err.error.message ),
            //footer: '<a href="#">Why do I have this issue?</a>'
          });
        });
      }

   }





  isValidField( field: string){

    return this.registerForm.controls[field].errors && this.registerForm.controls[field].touched;
   // if(this.registerForm.get(campo)?.invalid && this.formSubmitted){
   //   return true;
   // } else{
   //   return false;
   // }
  }

  contrasenaNoValida(){
    const pass1 = this.registerForm.get('password1')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    if(pass1!==pass2 && this.formSubmitted ){
      return true;
    } else {
      return false;
    }
  }

  aceptaTerminos(){
    this.checkForm();
    return !this.registerForm.get('terminos')?.value && this.formSubmitted;
  }

  passwordsIguales(pass1Name: string, pass2Name: string){

    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const pass1Control = formGroup.get(pass1Name)?.value;
      const pass2Control = formGroup.get(pass2Name)?.value;

      if ( pass1Control !== pass2Control ) {
        formGroup.get(pass2Name)?.setErrors({ notEqual: true });
        return { notEqual: true }
      }

      return null;

     // if ( pass1Control?.value === pass2Control?.value ){
     // //pass2Control?.setErrors(null)
     //   formGroup.get(pass2Control)?.setErrors(null);
     // } else {
     //   formGroup.get(pass2Control)?.setErrors({noEsIgual: true});
     //   pass2Control?.setErrors({ noEsIgual: true })
     // }
    }

  }

  checkForm(){

    if(!this.registerForm.invalid){
      (document.getElementById("btn") as HTMLButtonElement).classList.remove('opacity-50');
      (document.getElementById("btn") as HTMLButtonElement).disabled = false;
      return;
    }
    (document.getElementById("btn") as HTMLButtonElement).classList.add('opacity-50');
    (document.getElementById("btn") as HTMLButtonElement).disabled = true;
  }

  abrirModal(){
        this.modalService.open(StripemodalComponent);
      }


}
