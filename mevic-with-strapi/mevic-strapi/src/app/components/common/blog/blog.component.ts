import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

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