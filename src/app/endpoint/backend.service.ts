import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mail } from '../model/email.interface';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

constructor(private http: HttpClient) { }

sendMail(email: Mail){

  this.http.post('http://localhost:3000/api/email', email).subscribe();
}

}
