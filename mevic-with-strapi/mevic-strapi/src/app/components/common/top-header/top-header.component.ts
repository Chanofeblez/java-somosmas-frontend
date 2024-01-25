import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopHeaderService } from './top-header.service';

@Component({
    selector: 'app-top-header',
    templateUrl: './top-header.component.html',
    styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

    public topHeaderData: any;

    constructor(
        public router: Router,
        private content: TopHeaderService
    ) {
        this.content.getData().subscribe((topHeaderData: any) => {
            this.topHeaderData = topHeaderData.data.attributes;
        });
    }

    ngOnInit(): void {}

}