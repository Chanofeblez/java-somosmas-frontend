import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-services-page-one',
    templateUrl: './services-page-one.component.html',
    styleUrls: ['./services-page-one.component.scss']
})
export class ServicesPageOneComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

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