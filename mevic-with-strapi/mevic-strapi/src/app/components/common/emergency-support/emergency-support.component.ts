import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmergencySupportService } from './emergency-support.service';

@Component({
    selector: 'app-emergency-support',
    templateUrl: './emergency-support.component.html',
    styleUrls: ['./emergency-support.component.scss']
})
export class EmergencySupportComponent implements OnInit {

    public emergencyData: any;

    constructor(
        public router: Router,
        private content: EmergencySupportService
    ) {
        this.content.getData().subscribe((emergencyData: any) => {
            this.emergencyData = emergencyData.data.attributes;
        });
    }

    ngOnInit(): void {}

}