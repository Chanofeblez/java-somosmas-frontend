import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../common/departments/departments.service';

@Component({
    selector: 'app-departments-page',
    templateUrl: './departments-page.component.html',
    styleUrls: ['./departments-page.component.scss']
})
export class DepartmentsPageComponent implements OnInit {

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