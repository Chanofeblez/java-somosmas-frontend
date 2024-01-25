import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MiembroService } from 'src/app/services/miembro.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  
  public formSubmitted = false;

  public registerForm: FormGroup = this.fb.group({
    nombre: ['Julio',[Validators.required]],
    primerApellido: ['Felbl',[Validators.required, Validators.minLength(2)]],
    segundoApellido: ['FDEZ',[Validators.required]],
    email: ['aaaa@bbbc.com',[Validators.required, Validators.email]],
    password: ['123',[Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    password2: ['123',[Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    telefono: ['112233',[Validators.required]],
    ciudad: ['asa',[Validators.required]],
    pais: ['sas',[Validators.required]],
    terminos: [true,[Validators.required]],
  }, {
    validator: this.passwordsIguales('password1', 'password2')
  });

  constructor(private fb: FormBuilder,
              private miembroService: MiembroService) { }

  ngOnInit(): void {
  }

  autenticar(): void {
    this.formSubmitted=true;
    console.log(this.registerForm.value);    
    
    if( !this.registerForm.invalid){      
      return;
    }
    
    
    //Realizar posteo
    this.miembroService.crearMiembro( this.registerForm.value )
        .subscribe( (resp:any) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your registration has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          console.log('miembro creado')
          console.log(resp);   
          localStorage.setItem('id', resp.id.toString()) ;        
        }, (err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: ( err.error.message ),
            //footer: '<a href="#">Why do I have this issue?</a>'
          });         
        });
  }

  campoNoValido( campo: string): boolean{
    if(this.registerForm.get(campo)?.invalid && this.formSubmitted){
      return true;
    } else{
      return false;
    }
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
    return !this.registerForm.get('terminos')?.value && this.formSubmitted;
  }

  passwordsIguales(pass1Name: string, pass2Name: string){

    return ( formGroup: FormGroup ) => {

      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if ( pass1Control?.value === pass2Control?.value ){
        pass2Control?.setErrors(null)
      } else {
        pass2Control?.setErrors({ noEsIgual: true })
      }
    }

  }

}
