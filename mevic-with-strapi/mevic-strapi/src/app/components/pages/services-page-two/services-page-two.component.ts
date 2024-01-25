import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../common/services/services.service';

@Component({
    selector: 'app-services-page-two',
    templateUrl: './services-page-two.component.html',
    styleUrls: ['./services-page-two.component.scss']
})
export class ServicesPageTwoComponent implements OnInit {

    public servicesData: any;

    constructor(
        private content: ServicesService
	) {
        this.content.getData().subscribe((servicesData: any) => {
            this.servicesData = servicesData.data;
        });
	}

    ngOnInit(): void {}

}