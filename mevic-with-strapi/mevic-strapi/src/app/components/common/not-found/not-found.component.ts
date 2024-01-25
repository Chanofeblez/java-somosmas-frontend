import { Component, OnInit } from '@angular/core';
import { NotFoundService } from './not-found.service';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

    public notFoundData: any;

    constructor(
        private content: NotFoundService
    ) {
        this.content.getData().subscribe((notFoundData: any) => {
            this.notFoundData = notFoundData.data.attributes;
        });
    }

    ngOnInit(): void {}

}