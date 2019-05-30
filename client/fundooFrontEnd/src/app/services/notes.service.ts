import { Injectable } from '@angular/core';
import { HttpServiceService } from './httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpServiceService) { }

  addNote(obj) {
    const data = {
      
      body: obj
    }
    return this.http.postaddNote(data)
  }
  
  getNote(obj){
    const token = localStorage.getItem('access_token');
    const data={
      tkn :token,
      body:obj
    }
    return this.http.postgetNote(data)
  }

  updateNote(requestBody) {
    const reqbody = {
      
      body: requestBody
    }
    return this.http.postUpdateNote(reqbody)
  }

  createLabelIn(requestBody){
    const reqbody = {
      
      body: requestBody
    }
    return this.http.postCreateLabel(reqbody)
  }

  getAllLable(){
    
    return this.http.postgetAllLabel()
  }

  todayDate(todayDate){
    const reqbody={
      body:todayDate
    }
    return this.http.postReminder(reqbody)
  }
}
