import { Component, OnInit } from '@angular/core';
import { TermsConditionsPageService } from './terms-conditions-page.service';

@Component({
    selector: 'app-terms-conditions-page',
    templateUrl: './terms-conditions-page.component.html',
    styleUrls: ['./terms-conditions-page.component.scss']
})
export class TermsConditionsPageComponent implements OnInit {

    public termsConditionsData: any;

    constructor(
        private content: TermsConditionsPageService
    ) {
        this.content.getData().subscribe((termsConditionsData: any) => {
            this.termsConditionsData = termsConditionsData.data.attributes;
        });
    }

    ngOnInit(): void {}

}