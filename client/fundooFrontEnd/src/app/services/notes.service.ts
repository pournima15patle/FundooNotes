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
}
