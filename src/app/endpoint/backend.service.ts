import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mail } from '../model/email.interface';
import { environment } from '../../environments/environment';
import { Post, PostResponse, PropertiesResponse } from '../model/auth.iterface';
import { Observable } from 'rxjs';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  sendMail(email: Mail) {
    this.http.post(BACKEND_URL + '/email', email).subscribe();
  }

  addProperty(property: Post, imagePath: Array<File>): Observable<any> {
    const postData = new FormData();
    postData.append('title', property.title);
    postData.append('description', property.description);
    postData.append('address', property.address);
    postData.append('sip', property.sip);
    postData.append('typology', property.typology);
    postData.append('rooms', property.rooms);
    postData.append('toilets', property.toilets);
    postData.append('floor', property.floor);
    postData.append('type', property.type);
    postData.append('price', property.price);
    for (let i = 0; i < imagePath.length; i++) {
      postData.append('imagePath', imagePath[i]);
    }

    postData.forEach(value => console.log('PostDAta ', value));
    return this.http.post<any>(BACKEND_URL + '/propertys', postData, {reportProgress: true, observe: 'events'});
  }

  getProperties(postsPerPage: number, currentPage: number): Observable<PropertiesResponse> {
    const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
    return  this.http.get<PropertiesResponse>(BACKEND_URL + '/propertys' + queryParams);
  }

  getProperty(id: string): Observable<Post> {
    return  this.http.get<Post>(BACKEND_URL + '/propertys/' + id);
  }

  deleteProperty(id: string): Observable<void> {
    return this.http.delete<void>(BACKEND_URL + '/propertys/' + id);
  }

}
