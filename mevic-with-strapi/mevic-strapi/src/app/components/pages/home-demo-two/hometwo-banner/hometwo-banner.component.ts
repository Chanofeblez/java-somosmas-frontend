import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HometwoBannerService } from './hometwo-banner.service';

@Component({
    selector: 'app-hometwo-banner',
    templateUrl: './hometwo-banner.component.html',
    styleUrls: ['./hometwo-banner.component.scss']
})
export class HometwoBannerComponent implements OnInit {

    public bannerData: any;

    constructor(
        private content: HometwoBannerService
	) {
        this.content.getData().subscribe((bannerData: any) => {
            this.bannerData = bannerData.data.attributes;
        });
	}

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