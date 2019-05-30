import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridServiceService {

 
  private view = new BehaviorSubject(true);
  currentView = this.view.asObservable();
  viewValue:boolean;

  constructor() { }

  changeGridView() {
    this.currentView.subscribe(
      responce=>this.viewValue=responce
    )
    this.view.next(!this.viewValue)
  }
}
