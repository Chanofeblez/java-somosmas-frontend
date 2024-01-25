import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../common/blog/blog.service';

@Component({
    selector: 'app-blog-left-sidebar-page',
    templateUrl: './blog-left-sidebar-page.component.html',
    styleUrls: ['./blog-left-sidebar-page.component.scss']
})
export class BlogLeftSidebarPageComponent implements OnInit {

    public blogData: any;

    constructor(
        private content: BlogService
    ) {
        this.content.getData().subscribe((blogData: any) => {
            this.blogData = blogData.data;
        });
    }

    ngOnInit(): void {}

    currentPage : any;
    onPageChange(page: number) {
        this.currentPage = page;
        window.scrollTo(0, 0);
    }

}