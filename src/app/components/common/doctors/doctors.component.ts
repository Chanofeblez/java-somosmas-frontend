import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-doctors',
    templateUrl: './doctors.component.html',
    styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

}