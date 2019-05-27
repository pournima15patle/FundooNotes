import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditLabelComponent } from '../edit-label/edit-label.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
message:string="FundooNotes"
  constructor(
    private dialog:MatDialog
  ) { }

  ngOnInit() {
  }

  refresh(){
    window.location.reload();
  }

  
  changeview(){

  }
  labelDialog(){
   
    const dialogRef = this.dialog.open(EditLabelComponent, {
      
      width: '300px',
      data: {}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The laabel dialog was closed',result);
      
    });
  }
  
}
