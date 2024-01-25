import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeaturesService } from './features.service';

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

    public featuresData: any;

    constructor(
        public router: Router,
        private content: FeaturesService
    ) {
        this.content.getData().subscribe((featuresData: any) => {
            this.featuresData = featuresData.data.attributes;
        });
    }

    ngOnInit(): void {}

}