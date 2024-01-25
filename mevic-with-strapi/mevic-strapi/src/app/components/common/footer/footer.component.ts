import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    public footerData: any;

	constructor(
        private content: FooterService
	) {
        this.content.getData().subscribe((footerData: any) => {
            this.footerData = footerData.data.attributes;
        });
	}

	ngOnInit(): void {}

}