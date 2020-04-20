import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mail } from '../model/email.interface';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

constructor(private http: HttpClient) { }

sendMail(email: Mail){

  this.http.post('api/email', email).subscribe();
}

}
