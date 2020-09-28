import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mail } from '../model/email.interface';
import { environment } from '../../environments/environment';
import { Post, PostResponse, PropertiesResponse, SearchQuery, Blog, BlogsResponse } from '../model/auth.iterface';
import { Observable, of } from 'rxjs';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  sendMail(email: Mail) {
    this.http.post(BACKEND_URL + '/email', email).subscribe();
  }

  addBlog(blog: Blog) {
    const postData = new FormData();
    postData.append('title', blog.title);
    postData.append('content', blog.content);
    postData.append('imagePath', blog.imagePath);
    return this.http.post(BACKEND_URL + '/blogs', postData, { reportProgress: true, observe: 'events' });
  }

  getBlogs(blogsPerPage: number, currentPage: number): Observable<BlogsResponse> {
    const queryParams = `?pagesize=${blogsPerPage}&page=${currentPage}`;
    return this.http.get<BlogsResponse>(BACKEND_URL + '/blogs' + queryParams);
  }

  getLastBlog(): Observable<Blog>{
    return this.http.get<Blog>(BACKEND_URL + '/last-blog');
  }

  getBlog(id: string): Observable<Blog> {
    return this.http.get<Blog>(BACKEND_URL + '/blogs/' + id);
  }

  deleteBlog(id: string): Observable<void>{
    return this.http.delete<void>(BACKEND_URL + '/blogs/' + id);
  }

  addProperty(property: Post, imagePath: Array<File>): Observable<any> {
    const postData = new FormData();
    postData.append('title', property.title);
    postData.append('city', property.city);
    postData.append('property_type', property.property_type);
    postData.append('description', property.description);
    postData.append('address', property.address);
    postData.append('sip', property.sip.toString());
    postData.append('typology', property.typology);
    postData.append('rooms', property.rooms.toString());
    postData.append('areas', property.areas.toString());
    postData.append('toilets', property.toilets.toString());
    postData.append('floor', property.floor.toString());
    postData.append('type', property.type);
    postData.append('price', property.price.toString());
    postData.append('exclusive', property.exclusive.toString());
    postData.append('position', property.position.toString());
    postData.append('rented', property.rented.toString());
    postData.append('sold', property.sold.toString());
    postData.append('prenoted', property.sold.toString());
    for (let i = 0; i < imagePath.length; i++) {
      postData.append('imagePath', imagePath[i]);
    }

    return this.http.post<any>(BACKEND_URL + '/propertys', postData, { reportProgress: true, observe: 'events' });
  }

  updateProperty(id: string, property: Post, imagePath: Array<File>): Observable<any> {
    let postData: Post | FormData;

    if (imagePath.length > 0) {
      postData = new FormData();
      postData.append('_id', id);
      postData.append('city', property.city);
      postData.append('property_type', property.property_type);
      postData.append('title', property.title);
      postData.append('description', property.description);
      postData.append('address', property.address);
      postData.append('sip', property.sip.toString());
      postData.append('typology', property.typology);
      postData.append('rooms', property.rooms.toString());
      postData.append('areas', property.areas.toString());
      postData.append('toilets', property.toilets.toString());
      postData.append('floor', property.floor.toString());
      postData.append('type', property.type);
      postData.append('price', property.price.toString());
      postData.append('exclusive', property.exclusive.toString());
      postData.append('position', property.position.toString());
      postData.append('rented', property.rented.toString());
      postData.append('sold', property.sold.toString());
      postData.append('prenoted', property.sold.toString());
      for (let i = 0; i < imagePath.length; i++) {
        postData.append('imagePath', imagePath[i]);
      }
    } else {
      postData = { ...property, _id: id };
    }

    // return of(true);

    return this.http.put<any>(BACKEND_URL + '/propertys/' + id, postData);
  }

  getProperties(searchQuery: SearchQuery, postsPerPage: number, currentPage: number): Observable<PropertiesResponse> {
    const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}&search=${searchQuery.search}&minSip=${searchQuery.minSip}&maxSip=${searchQuery.maxSip}&minPrice=${searchQuery.minPrice}&maxPrice=${searchQuery.maxPrice}&city=${searchQuery.city}&type=${searchQuery.type}&property_type=${searchQuery.property_type}&floor=${searchQuery.floor}&typology=${encodeURIComponent(searchQuery.typology)}`;
    return this.http.get<PropertiesResponse>(BACKEND_URL + '/propertys' + queryParams);
  }

  getProperty(id: string): Observable<Post> {
    return this.http.get<Post>(BACKEND_URL + '/propertys/' + id);
  }

  deleteProperty(id: string): Observable<void> {
    return this.http.delete<void>(BACKEND_URL + '/propertys/' + id);
  }

  getExclusive(): Observable<{ exclusive: Array<any> }> {
    return this.http.get<{ exclusive: Array<any> }>(BACKEND_URL + '/exclusive');
  }

}
