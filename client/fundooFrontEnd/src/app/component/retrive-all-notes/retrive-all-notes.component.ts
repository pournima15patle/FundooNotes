import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-retrive-all-notes',
  templateUrl: './retrive-all-notes.component.html',
  styleUrls: ['./retrive-all-notes.component.scss']
})
export class RetriveAllNotesComponent implements OnInit {
 notes:any[];
 items:any[];
  constructor(private note:NotesService,
    private dialog : MatDialog
    
    ) { }

  ngOnInit() {
    this.retriveCards();
  }

 retriveCards(){
  this.note.getNote(this.notes).subscribe(
    data => {
      console.log("data of getAllNotes: ", data);
      this.notes= data['data']
    },
    error => {
     console.log("error of getAllNotes: ", error);

    }
  )
 }

 
title:any;
discription:any;
openDialogbox(item): void {
console.log("this is item",item)
  const dialogRef = this.dialog.open(DialogBoxComponent, {
    
    width: '500px',
    data: { noteData : item}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.notes = result;
  });
}


}
