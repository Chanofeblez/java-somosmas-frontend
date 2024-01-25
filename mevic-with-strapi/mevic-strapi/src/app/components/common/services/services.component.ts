import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from './services.service';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

    public servicesData: any;

    constructor(
        public router: Router,
        private servicesContent: ServicesService
    ) {
        this.servicesContent.getData().subscribe((servicesData: any) => {
            this.servicesData = servicesData.data;
        });
    }

    ngOnInit(): void {}

}