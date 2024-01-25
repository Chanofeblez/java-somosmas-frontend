import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../../common/doctors/doctors.service';

@Component({
    selector: 'app-doctors-page',
    templateUrl: './doctors-page.component.html',
    styleUrls: ['./doctors-page.component.scss']
})
export class DoctorsPageComponent implements OnInit {

    public doctorsData: any;

    constructor(
        private content: DoctorsService
    ) {
        this.content.getData().subscribe((doctorsData: any) => {
            this.doctorsData = doctorsData.data;
        });
    }

    ngOnInit(): void {}

    currentPage : any;
    onPageChange(page: number) {
        this.currentPage = page;
        window.scrollTo(0, 0);
    }

}