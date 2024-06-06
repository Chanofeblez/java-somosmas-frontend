import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { EventoForm } from 'src/app/interfaces/evento-form.interfaces';
import { EventoService } from 'src/app/services/evento.service';

@Component({
    selector: 'app-featured-services',
    templateUrl: './featured-services.component.html',
    styleUrls: ['./featured-services.component.scss']
})
export class FeaturedServicesComponent implements OnInit {

	eventos : EventoForm[] = [];

    constructor(private eventoService: EventoService) { }

    ngOnInit(): void {
		this.eventoService.getEventos()
		 .subscribe( (events:any) => {
			console.log("Evento Mostrado");
			console.log(events);
			this.eventos = events;
			console.log(this.eventos[0].nombre);
		 });
		 
	}

    servicesSlides: OwlOptions = {
		margin: 25,
		nav: false,
		loop: true,
		dots: true,
		autoplay: false,
		autoplayHoverPause: true,
		navText: [
			"<i class='ph-caret-left'></i>",
			"<i class='ph-caret-right'></i>",
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
    }

}