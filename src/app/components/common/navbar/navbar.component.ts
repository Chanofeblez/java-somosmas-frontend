import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterResponse } from 'src/app/interfaces/register-form.interfaces';
import { MemberService as MiembroService } from 'src/app/services/miembro.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    loginB:boolean=true;
    idStorage: string | null = localStorage.getItem("id");
    idFinal:number = -1;
   // user: RegisterResponse = {
   //     nombre:"",
   //     primerApellido:"",
    //    segundoApellido:"",
   //     email:"",
   //     telefono:"",
   //     ciudad:"",
   //     pais:""
    //};


    constructor(
        public router: Router,
        public miembroService: MiembroService
    ) {

     }

    ngOnInit(): void {

        if(this.idStorage!==null){
            this.idFinal=parseInt(this.idStorage);
            this.loginB = false;
            console.log(this.idFinal);
    //        console.log(this.user);

     //       this.user.nombre=localStorage.getItem("nombre") || '';
     //       this.user.primerApellido=localStorage.getItem("primerApellido") || '';
     //       this.user.segundoApellido=localStorage.getItem("segundoApellido") || '';
     //       this.user.email=localStorage.getItem("email") || '';
     //       this.user.telefono=localStorage.getItem("nombre") || '';
     //       this.user.ciudad=localStorage.getItem("ciudad") || '';
     //       this.user.pais=localStorage.getItem("pais") || '';
        }
    }



    switcherClassApplied = false;
    switcherToggleClass() {
        this.switcherClassApplied = !this.switcherClassApplied;
    }

    searchClassApplied = false;
    searchToggleClass() {
        this.searchClassApplied = !this.searchClassApplied;
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    logout() {
        localStorage.clear();
        this.loginB=true;
    }

}
