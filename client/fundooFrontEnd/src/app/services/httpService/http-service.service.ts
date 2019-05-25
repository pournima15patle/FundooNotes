import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { timingSafeEqual } from 'crypto';
import { environment } from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  
  baseUrl: any = environment.baseUrl;
  baseUrl2: any=environment.baseUrl2;
  constructor(private http:HttpClient) { }

  postRegister(options){
    return this.http.post(this.baseUrl , options.body);
  }

  postLogin(options){
    return this.http.post(this.baseUrl+'login', options.body);
  }

  postForgotPassword(options){
    
    return this.http.post(this.baseUrl+'reset', options.body);
  }

  postResetPassword(options){
    console.log("url:",this.baseUrl+'reset-password');
    const httpOptions = {
      headers: new HttpHeaders({
      'Authorization': localStorage.getItem('access_token')
      })
    };

    console.log("tokens: ", localStorage.getItem('access_token'));
    
    console.log("options for reset" , options);
    
    return this.http.post(this.baseUrl+'reset-password', options.body,httpOptions);
   
    
  }

  postaddNote(options){
    const httpOptions = {
      headers: new HttpHeaders({
      'Authorization': localStorage.getItem('access_token')
      })
    };

    console.log("tokens: ", localStorage.getItem('access_token'));
    
    console.log("options for reset" , options);
    return this.http.post(this.baseUrl2, options.body,httpOptions);
  }

  postgetNote(options){
    const httpOptions={
      headers:new HttpHeaders({
        'Authorization':localStorage.getItem('access_token')
      })
    };
    console.log("tokens: ", localStorage.getItem('access_token'));
    
    console.log("options for get all notes" , options.body);
    return this.http.get(this.baseUrl2+'getNotes', options.body);
  }

  postUpdateNote(options){
    const httpOptions = {
      headers: new HttpHeaders({
      'Authorization': localStorage.getItem('access_token')
      })
    };

    console.log("tokens: ", localStorage.getItem('access_token'));
    
    console.log("options for reset" , options);
    return this.http.post(this.baseUrl2+'update', options.body,httpOptions);
  }
}
