import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-hometwo-banner',
    templateUrl: './hometwo-banner.component.html',
    styleUrls: ['./hometwo-banner.component.scss']
})
export class HometwoBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    bannerSlides: OwlOptions = {
		items: 1,
		dots: true,
		nav: false,
		loop: true,
		autoplay: true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		navText: [
			"<i class='ph-caret-left'></i>",
			"<i class='ph-caret-right'></i>",
		]
    }

}