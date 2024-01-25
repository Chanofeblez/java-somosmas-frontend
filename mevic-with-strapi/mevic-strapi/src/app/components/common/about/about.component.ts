import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutService } from './about.service';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    public aboutData: any;

	constructor(
        public router: Router,
        private content: AboutService
	) {
        this.content.getData().subscribe((aboutData: any) => {
            this.aboutData = aboutData.data.attributes;
        });
	}

	ngOnInit(): void {}

}