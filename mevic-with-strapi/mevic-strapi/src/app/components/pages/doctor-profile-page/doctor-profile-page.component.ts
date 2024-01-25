import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../src/environments/environment';
import { DoctorsService } from '../../common/doctors/doctors.service';

@Component({
    selector: 'app-doctor-profile-page',
    templateUrl: './doctor-profile-page.component.html',
    styleUrls: ['./doctor-profile-page.component.scss']
})
export class DoctorProfilePageComponent implements OnInit {

    public slug: any;
    public doctorsData: any;
    public doctorProfileData: any;
    private API_URL= environment.API_URL;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private content: DoctorsService
    ) {
        this.route.params.subscribe((param : any)=>{
            let url = `${this.API_URL}/doctors?filters[slug][$eq]=${param.slug}&populate=*`;
            let ddd = this.http.get(url);
            ddd.subscribe(res => {
                this.doctorProfileData = res;
            });
        });
        this.content.getData().subscribe((doctorsData: any) => {
            this.doctorsData = doctorsData.data;
        });
    }

    ngOnInit(): void {}

}