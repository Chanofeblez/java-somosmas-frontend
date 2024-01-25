import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SuccessStoriesService } from './success-stories.service';

@Component({
    selector: 'app-success-stories',
    templateUrl: './success-stories.component.html',
    styleUrls: ['./success-stories.component.scss']
})
export class SuccessStoriesComponent implements OnInit {

    public successStoryData: any;

    constructor(
        private content: SuccessStoriesService
	) {
        this.content.getData().subscribe((successStoryData: any) => {
            this.successStoryData = successStoryData.data.attributes;
        });
	}

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