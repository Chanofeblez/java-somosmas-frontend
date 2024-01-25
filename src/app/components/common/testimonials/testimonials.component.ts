import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-testimonials',
    templateUrl: './testimonials.component.html',
    styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    testimonialsSlides: OwlOptions = {
		items: 1,
		margin: 0,
		nav: false,
		loop: true,
		dots: true,
		autoplay: false,
		autoplayHoverPause: true,
		navText: [
			"<i class='ph-caret-left'></i>",
			"<i class='ph-caret-right'></i>",
		]
    }

}