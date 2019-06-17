import { Injectable } from '@angular/core';
import { HttpServiceService } from './httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class VmService {

  constructor(private http:HttpServiceService) { }

  addVmUser(obj){
 
    const data = {
      body: obj
    }
    return this.http.addVmUser(data);
  }

  getUser(){
  
    // const data = {
    //   body: obj
    // }
    return this.http.getVmUser();
  }
}
