import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditLabelComponent } from '../edit-label/edit-label.component';
import { ArchiveComponent } from '../archive/archive.component';
import { GridServiceService } from '../../services/grid-service.service';
import { DOCUMENT } from '@angular/common'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NotesService } from '../../services/notes.service';
import { environment } from '../../../environments/environment';
import { SetProfileComponent } from '../set-profile/set-profile.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  message: string = "FundooNotes"
  gridView: boolean;
  value: any;
  model: any;
  private messageSource = new BehaviorSubject([]);
  currentMessage = this.messageSource.asObservable();
  data: any[];
  dialogRef: any;

firstName =localStorage.getItem('firstName');
lastName =localStorage.getItem('lastName');
email =localStorage.getItem('email');
profile = localStorage.getItem('Profile')

  img = this.profile
  constructor(
    @Inject(DOCUMENT) private document: any,
    private dialog: MatDialog,
    private view: GridServiceService,
    private router: Router,
    private note: NotesService
  ) { }

  ngOnInit() {
    this.viewUpdate();
    localStorage.getItem('Profile')
  }

  profileImage(event): void {
    const dialogRef = this.dialog.open(SetProfileComponent, {
    width: '400px',
    data: event
    });
    dialogRef.afterClosed()
    .subscribe(result => {
    this.img = localStorage.getItem("profilePic")
    });
    }

  viewUpdate() {
    this.view.currentView.subscribe(
      response => this.gridView = response
    );
  }

  islist;
  isClicked;
  changeView() {
    console.log("this is changeview", this.gridView);
    this.view.changeGridView();
    this.viewUpdate();
  }

  refresh() {
    window.location.reload();
  }



  onEnter(value: string) {
    this.value = value;
    this.model = {
      "search": this.value
    }
    console.log("search", this.model);
    this.note.searchNote(this.model).subscribe(
      (response: any) => {
        console.log("search  note", response);
        this.data = response['data'];
        console.log("asdfghhj", this.data);
        this.messageSource.next(this.data);
      }
    )
    error => {
      console.log("error in search note", error);

    }

    this.router.navigate(['dashboard', 'search']);
  }

  // changeView(){
  //   this.gridView = !this.gridView;
  // }

  go2UrlHelp() {
    this.document.location.href = 'https://support.google.com/keep/#topic=6262468';
  }

  labelDialog() {

    const dialogRef = this.dialog.open(EditLabelComponent, {

      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The laabel dialog was closed', result);

    });
  }

  archiveDialog() {
    const archiveRef = this.dialog.open(ArchiveComponent, {
      width: '300px',
      data: {}
    });
    archiveRef.afterClosed().subscribe(result => {
      console.log('The notes archive', result);

    });
  }

  archive() {
    this.router.navigate(['dashboard', 'archive']);
  }

  trash() {
    this.router.navigate(['dashboard', 'trash'])
  }

  retriveAllNotes() {
    this.router.navigate(['dashboard', 'retriveAllNotes']);
  }

  logout() {
    //localStorage.clear();
    localStorage.removeItem('access_token');
  }

 
}
