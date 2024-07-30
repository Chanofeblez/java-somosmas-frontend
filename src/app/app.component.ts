import { Component, computed, inject } from '@angular/core';
import { Router, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { AuthStatus } from './interfaces';
import { MemberService } from './services/miembro.service';
declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent {

    //Configuracion de la maqueta
    location: any;
    routerSubscription: any;

    //My Code
    private authService = inject(AuthService);
    private memberService = inject(MemberService);

    //Configuracion de la maqueta
    public router = inject(Router);

    constructor() {
      this.memberService.getMiembros();
    }

    ngOnInit(){
      //Configuracion de la maqueta
        this.recallJsFuntions();
        this.memberService.getMiembros();
        console.log("band1");
    }


    //Configuracion de la maqueta
    recallJsFuntions() {
        this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
        .subscribe(event => {
            this.location = this.router.url;
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }

    //My Code
    public finishedAuthCheck = computed<boolean>( () => {
      if(this.authService.authStatus() === AuthStatus.checking ){
        return false;
      }
      return true;
    });
}
