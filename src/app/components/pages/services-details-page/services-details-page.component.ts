import { Component, OnInit } from '@angular/core';
import { EventoForm } from 'src/app/interfaces/evento-form.interfaces';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-services-details-page',
  templateUrl: './services-details-page.component.html',
  styleUrls: ['./services-details-page.component.scss']
})
export class ServicesDetailsPageComponent implements OnInit {

  eventos : EventoForm[] = [];

    constructor(private eventoService: EventoService
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
