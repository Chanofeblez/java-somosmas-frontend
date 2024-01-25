import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-emergency-support',
    templateUrl: './emergency-support.component.html',
    styleUrls: ['./emergency-support.component.scss']
})
export class EmergencySupportComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

}