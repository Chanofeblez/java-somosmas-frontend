import { Component, OnInit } from '@angular/core';
import { BlogForm } from 'src/app/interfaces/blog-form.interfaces';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs : BlogForm[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs()
		 .subscribe( (blogs:any) => {
			console.log("Blog Mostrado");
			console.log(blogs);
			this.blogs = blogs;
			console.log(this.blogs[0].nombre);
		 });
  }

}
