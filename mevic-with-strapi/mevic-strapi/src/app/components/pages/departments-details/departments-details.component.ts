import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../src/environments/environment';

@Component({
	selector: 'app-departments-details',
	templateUrl: './departments-details.component.html',
	styleUrls: ['./departments-details.component.scss']
})
export class DepartmentsDetailsComponent implements OnInit {

    public slug: any;
    public departmentData: any;
    private API_URL= environment.API_URL;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient
    ) {
        this.route.params.subscribe((param : any)=>{
            let url = `${this.API_URL}/departments?filters[slug][$eq]=${param.slug}&populate=*`;
            let ddd = this.http.get(url);
            ddd.subscribe(res => {
                this.departmentData = res;
            });
        });
    }

    ngOnInit(): void {}

}