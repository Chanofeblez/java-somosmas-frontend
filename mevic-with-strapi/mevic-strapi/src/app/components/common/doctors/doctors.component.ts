import { Component, OnInit } from '@angular/core';
import { DoctorsService } from './doctors.service';

@Component({
    selector: 'app-doctors',
    templateUrl: './doctors.component.html',
    styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

    public doctorsData: any;

    constructor(
        private content: DoctorsService
    ) {
        this.content.getData().subscribe((doctorsData: any) => {
            this.doctorsData = doctorsData.data;
        });
    }

    ngOnInit(): void {}

}