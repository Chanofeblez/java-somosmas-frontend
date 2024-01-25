import { Component, OnInit } from '@angular/core';
import { PrivacyPolicyPageService } from './privacy-policy-page.service';

@Component({
    selector: 'app-privacy-policy-page',
    templateUrl: './privacy-policy-page.component.html',
    styleUrls: ['./privacy-policy-page.component.scss']
})
export class PrivacyPolicyPageComponent implements OnInit {

    public privacyPolicyData: any;

    constructor(
        private content: PrivacyPolicyPageService
    ) {
        this.content.getData().subscribe((privacyPolicyData: any) => {
            this.privacyPolicyData = privacyPolicyData.data.attributes;
        });
    }

    ngOnInit(): void {}

}