import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeoneBannerService } from './homeone-banner.service';

@Component({
    selector: 'app-homeone-banner',
    templateUrl: './homeone-banner.component.html',
    styleUrls: ['./homeone-banner.component.scss']
})
export class HomeoneBannerComponent implements OnInit {

    public bannerData: any;

    constructor(
        private content: HomeoneBannerService
	) {
        this.content.getData().subscribe((bannerData: any) => {
            this.bannerData = bannerData.data.attributes;
        });
	}

    ngOnInit(): void {}

    mainBannerSlides: OwlOptions = {
		items: 1,
		nav: true,
		loop: true,
		dots: false,
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