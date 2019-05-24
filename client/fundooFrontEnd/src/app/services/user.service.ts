import { Injectable } from '@angular/core';
import { HttpServiceService } from './httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private http: HttpServiceService) { }

  register(obj) {
    const data = {
      body: obj
    }
    return this.http.postRegister(data)
  }

  login(obj) {
    const data = {
      body: obj
    }
    return this.http.postLogin(data)
  }

  forgotPassword(obj){
    const data ={
      body:obj
    }
    return this.http.postForgotPassword(data)
  }

  resetPassword(obj){
    console.log("AAAAA",obj);
    
    const data ={
      body:obj
    }
    return this.http.postResetPassword(data)
  }
}
