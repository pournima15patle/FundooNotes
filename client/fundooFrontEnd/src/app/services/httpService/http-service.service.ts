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
  baseUrl3: any=environment.baseUrl3;
  baseUrl4:any=environment.baseUrl4;
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

// *****************************************************************************************************

  postgetNote(options){
    const httpOptions={
      headers:new HttpHeaders({
        'Authorization':localStorage.getItem('access_token')
      })
    };
    console.log("tokens: ", localStorage.getItem('access_token'));
    
 
    return this.http.get(this.baseUrl2+'getNotes', options.body);
  }
/***************************************************************************************************** */
  postgetNoteForArchive(options){
    console.log("gelAllNotes for archive in http service",options);
    
    const httpOptions={
      headers:new HttpHeaders({
        'Authorization':localStorage.getItem('access_token')
      })
    };
    console.log("tokens: ", localStorage.getItem('access_token'));
    
    console.log("options for get all notes in archive" , options);
    return this.http.get(this.baseUrl2+'getNotes', options.body);
  }
/******************************************************************************************************** */

postgetNoteForTrash(options){
  console.log("gelAllNotes for archive in http service",options);
  
  const httpOptions={
    headers:new HttpHeaders({
      'Authorization':localStorage.getItem('access_token')
    })
  };
  console.log("tokens: ", localStorage.getItem('access_token'));
  
  console.log("options for get all notes in trash" , options);
  return this.http.get(this.baseUrl2+'getNotes', options.body);
}

/********************************************************************************************************** */
  postUpdateNote(options){
    const httpOptions = {
      headers: new HttpHeaders({
      'Authorization': localStorage.getItem('access_token')
      })
    };

    console.log("tokens: ", localStorage.getItem('access_token'));
    
    console.log("options for reset" , options);
    return this.http.post(this.baseUrl2+'editNotes', options.body,httpOptions);
  }
  postCreateLabel(options){
    const httpOptions = {
      headers: new HttpHeaders({
      'Authorization': localStorage.getItem('access_token')
      })
    };

    console.log("tokens: ", localStorage.getItem('access_token'));
    console.log("this is api",this.baseUrl3)
    
    console.log("thi is http post",this.baseUrl3, options.body,httpOptions)
    return this.http.post(this.baseUrl3, options.body,httpOptions);
  }


  postReminder(options){
    
    const httpOptions = {
      headers: new HttpHeaders({
      'Authorization': localStorage.getItem('access_token')
      })
    };
    return this.http.post(this.baseUrl2+'reminderNotes' , options.body,httpOptions);
  }

  postgetAllLabel(){
    return this.http.get(this.baseUrl3)
  }

  postSetColor(options){
    console.log("this is http:",options);
    
    const httpOptions = {
      headers: new HttpHeaders({
      'Authorization': localStorage.getItem('access_token')
      })
    };
    return this.http.post(this.baseUrl2+'color' , options.body,httpOptions);
  }

  postSetArchive(options){
    const httpOptions = {
      headers: new HttpHeaders({
      'Authorization': localStorage.getItem('access_token')
      })
    };
    return this.http.post(this.baseUrl2+'archive' , options.body,httpOptions);
  }

  postSetTrash(options){
    const httpOptions = {
      headers: new HttpHeaders({
      'Authorization': localStorage.getItem('access_token')
      })
    };
    return this.http.post(this.baseUrl2+'trash' , options.body,httpOptions);
  }

  postSearchNote(options){
    console.log("fd",options);
    var data=options.body.search;
    console.log("search data",data);
    
    const httpOptions = {
      headers: new HttpHeaders({
      'Authorization': localStorage.getItem('access_token'),
      search:data
      })
    };
    
    return this.http.get(this.baseUrl2+'searchNotes',httpOptions);
  
  }
  postNewData(options){
    console.log("fd",options);
    // var data=options;
    // console.log("search data",data);
    
    const httpOptions = {
      headers: new HttpHeaders({
      'Authorization': localStorage.getItem('access_token'),
      // profile:data
      })
    };
    
    return this.http.post(this.baseUrl+'upload',options, httpOptions);
  
  }

  addLabel(options){
    console.log("fd",options);
    // var data=options;
    // console.log("search data",data);
    
    const httpOptions = {
      headers: new HttpHeaders({
      'Authorization': localStorage.getItem('access_token'),
      // profile:data
      })
    };
    
    return this.http.post(this.baseUrl2+'addLabel',options, httpOptions);
  
  }



  /************************************************************************************************/
  addVmUser(options){
    console.log("data after creating user: ", options.body);
    const httpOptions = {
      headers: new HttpHeaders({
      'Authorization': localStorage.getItem('access_token'),
      // profile:data
      })
    };
    
    return this.http.post(this.baseUrl4,options.body,httpOptions);
  
  }

  getVmUser(){
    return this.http.get(this.baseUrl4);
  }
  
}

