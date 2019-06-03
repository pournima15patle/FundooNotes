import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  constructor(private note:NotesService,
    private dialog: MatDialog, ) { }
  notes: any[];
  items: any[];
  ngOnInit() {
    this.retriveCardsForTrash();
  }

  retriveCardsForTrash() {
    this.note.getNoteForTrash(this.notes).subscribe(
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


