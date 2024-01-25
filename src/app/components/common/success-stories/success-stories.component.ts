import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-success-stories',
    templateUrl: './success-stories.component.html',
    styleUrls: ['./success-stories.component.scss']
})
export class SuccessStoriesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    storiesSlides: OwlOptions = {
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
				items: 1
			},
			992: {
				items: 1
			},
			1200: {
				items: 2
			}
		}
    }

}