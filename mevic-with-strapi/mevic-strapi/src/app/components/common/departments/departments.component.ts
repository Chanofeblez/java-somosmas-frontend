import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from './departments.service';

@Component({
    selector: 'app-departments',
    templateUrl: './departments.component.html',
    styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

    public departmentsData: any;

    constructor(
        private content: DepartmentsService
    ) {
        this.content.getData().subscribe((departmentsData: any) => {
            this.departmentsData = departmentsData.data;
        });
    }

    ngOnInit(): void {}

}