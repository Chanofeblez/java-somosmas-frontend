import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog/blog.service';

@Component({
    selector: 'app-widget-sidebar',
    templateUrl: './widget-sidebar.component.html',
    styleUrls: ['./widget-sidebar.component.scss']
})
export class WidgetSidebarComponent implements OnInit {

    public blogData: any;

    constructor(
        private content: BlogService
    ) {
        this.content.getData().subscribe((blogData: any) => {
            this.blogData = blogData.data;
        });
    }

    ngOnInit(): void {}

}