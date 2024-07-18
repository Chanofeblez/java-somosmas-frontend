import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoForm } from 'src/app/interfaces/evento-form.interfaces';
import { EventoService } from 'src/app/services/evento.service';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

    eventos : EventoForm[] = [];

    constructor(private eventoService: EventoService,
                public router: Router
    ) { }

    ngOnInit(): void {
		this.eventoService.getEventos()
		 .subscribe( (events:any) => {
			console.log("Evento Mostrado");
			console.log(events);
			this.eventos = events;
			console.log(this.eventos[0].nombre);
		 });
		 
	}

   

}