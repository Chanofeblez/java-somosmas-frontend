import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { MemberService} from 'src/app/services/miembro.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    loginB:boolean=true;
    idStorage: string | null;
    idFinal:number = -1;
    member: Member | undefined;

    public router         = inject(Router);
    public miembroService = inject(MemberService);
    public authService    = inject(AuthService);

    constructor() {
      this.idStorage = localStorage.getItem("member");
     }

    ngOnInit(): void {
      this.idStorage = localStorage.getItem("member");

        if(this.idStorage!==null){
          this.member = this.miembroService.getMiembrobyEmail(this.idStorage);
            this.idFinal=parseInt(this.idStorage);
            this.loginB = false;
            console.log(this.idStorage);
            console.log(this.loginB);
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
        console.log("Log1");
        this.authService.logout();
    }

}
