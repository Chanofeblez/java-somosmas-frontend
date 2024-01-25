import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-book-an-appointment',
    templateUrl: './book-an-appointment.component.html',
    styleUrls: ['./book-an-appointment.component.scss']
})
export class BookAnAppointmentComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

}