import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mail } from '../model/email.interface';
import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class BackendService {

constructor(private http: HttpClient) { }

sendMail(email: Mail){
  this.http.post(BACKEND_URL + '/email', email).subscribe();
}

}
