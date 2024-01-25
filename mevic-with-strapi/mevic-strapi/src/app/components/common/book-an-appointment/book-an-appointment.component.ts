import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookAnAppointmentService } from './book-an-appointment.service';

@Component({
    selector: 'app-book-an-appointment',
    templateUrl: './book-an-appointment.component.html',
    styleUrls: ['./book-an-appointment.component.scss']
})
export class BookAnAppointmentComponent implements OnInit {

    public appointmentData: any;

    constructor(
        public router: Router,
        private content: BookAnAppointmentService
    ) {
        this.content.getData().subscribe((appointmentData: any) => {
            this.appointmentData = appointmentData.data.attributes;
        });
    }

    ngOnInit(): void {}

}