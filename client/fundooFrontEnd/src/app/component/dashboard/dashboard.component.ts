import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditLabelComponent } from '../edit-label/edit-label.component';
import { ArchiveComponent } from '../archive/archive.component';
import { GridServiceService } from '../../services/grid-service.service';
import {DOCUMENT} from '@angular/common'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
message:string="FundooNotes"
gridView:boolean;

  constructor(
    @Inject(DOCUMENT) private document:any,
    private dialog:MatDialog,
    private view:GridServiceService
  ) { }

  ngOnInit() {
    this.viewUpdate();
  }

  viewUpdate()
{
this.view.currentView.subscribe(
response=>this.gridView=response
);
}

islist;
isClicked;
changeView(){
console.log("this is changeview",this.gridView);
this.view.changeGridView();
this.viewUpdate();
}

  refresh(){
    window.location.reload();
  }

  
  changeview(){
    this.gridView = !this.gridView;
  }

  go2UrlHelp(){
    this.document.location.href = 'https://support.google.com/keep/#topic=6262468';
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

  archiveDialog(){
    const archiveRef=this.dialog.open(ArchiveComponent,{
      width:'300px',
      data:{}
    });
    archiveRef.afterClosed().subscribe(result => {
      console.log('The notes archive',result);
      
    });
  }
  
}
