import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searhNotes: string;

  constructor(private dashboardService:DashboardComponent) { }

  ngOnInit() {
    this.dashboardService.currentMessage.subscribe(
      (response:any)=>{
        console.log("ggggg",response);
        
      this.searhNotes=response;
      console.log("Searched notes",this.searhNotes)
     
      })
      }
      
  

}
