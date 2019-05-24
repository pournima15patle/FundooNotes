import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
message:string="FundooNotes"
  constructor() { }

  ngOnInit() {
  }

  refresh(){
    window.location.reload();
  }

  
  changeview(){

  }
  
}
