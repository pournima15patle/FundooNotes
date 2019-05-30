import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { GridServiceService } from '../../services/grid-service.service';

@Component({
  selector: 'app-retrive-all-notes',
  templateUrl: './retrive-all-notes.component.html',
  styleUrls: ['./retrive-all-notes.component.scss']
})
export class RetriveAllNotesComponent implements OnInit {
  notes: any[];
  items: any[];
  gridView:boolean;
  constructor(private note: NotesService,
    private dialog: MatDialog,
    private view:GridServiceService

  ) { }

  ngOnInit() {
    this.retriveCards();
    this.view.currentView.subscribe(
      responce=>this.gridView=responce
    )

  }


  retriveCards() {
    this.note.getNote(this.notes).subscribe(
      data => {
        console.log("data of getAllNotes: ", data);
        this.notes = data['data']
      },
      error => {
        console.log("error of getAllNotes: ", error);

      }
    )
  }


 
  openDialogbox(item): void {
    console.log("this is item", item)
    const dialogRef = this.dialog.open(DialogBoxComponent, {

      width: '500px',
      data: { noteData: item }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.notes = result;
    });
  }

  


}
