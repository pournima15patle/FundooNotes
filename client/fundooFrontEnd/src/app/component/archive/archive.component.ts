import { Component, OnInit } from '@angular/core';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { NotesService } from '../../services/notes.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  data: any;
  notes: any[];
  items: any[];
  constructor(
    private note: NotesService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.retriveCardsForArchive();
  }

  retriveCardsForArchive() {
    this.note.getNoteForArchive(this.notes).subscribe(
      data => {
        console.log("data of getAllNotes in archive: ", data);
        this.notes = data['data']
      },
      error => {
        console.log("error of getAllNotes in archive: ", error);

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
