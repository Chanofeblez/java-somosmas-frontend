import { Component, OnInit } from '@angular/core';
import { PartnerService } from './partner.service';

@Component({
    selector: 'app-partner',
    templateUrl: './partner.component.html',
    styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

    public partnerData: any;

    constructor(
        private content: PartnerService
    ) {
        this.content.getData().subscribe((partnerData: any) => {
            this.partnerData = partnerData.data.attributes;
        });
    }

    ngOnInit(): void {}

}