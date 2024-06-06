import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BlogForm } from '../interfaces/blog-form.interfaces';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  crearBlog( formData: BlogForm ){

    return this.http.post(`${ base_url }/blogs/create`, formData);
    
  }  

  getBlog( formData: Number ){

  //return this.http.get(`${ base_url }/eventos`, formData);
}

  getBlogs( ){

  return this.http.get(`${ base_url }/blogs`);
}
}