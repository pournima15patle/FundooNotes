import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { MatDialog, MatSnackBar } from '@angular/material';
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
  gridView: boolean;
  model: any;
  reminder: any;
  todayDate: any
  myColor: any;
  data1: Object;
  constructor(private note: NotesService,
    private dialog: MatDialog,
    private view: GridServiceService,
    private snackBar: MatSnackBar

  ) { }

  ngOnInit() {
    this.retriveCards();
    this.view.currentView.subscribe(
      responce => this.gridView = responce
    )

  }


  retriveCards() {
    this.note.getNote(this.notes).subscribe(
      data => {
        console.log("data of getAllNotes in retriveAll Notes : ", data['data']);
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

  setReminder(item, $event) {
    console.log("usffjewp;foewewhfpwf;ewkfw", item);
    console.log("usffjewp;foewewhfpwf;ewkfw", $event);
    this.todayDate = $event;
    this.model = {
      noteId: item.id,
      reminder: this.todayDate
    }

    this.note.setReminder(this.model).subscribe(
      data => {
        console.log("data of setReminders: ", data);

      },
      error => {
        console.log("error of setReminders: ", error);

      }
    )
  }


  setColor(item, $event) {
    console.log("data in note ", item);
    console.log("data in note ", item.id);


    this.myColor = $event;
    this.model = {
      id: item.id,
      userId: localStorage.getItem('userid'),
      color: this.myColor
    }
    this.note.setColor(this.model).subscribe(
      data => {
        console.log("data of setColor: ", data);

      },
      error => {
        console.log("error in setColor: ", error);

      }
    )
  }

  LableName(item: any, $event) {
    this.LableName = $event;
    console.log("event", this.LableName);
    this.model = {
      "LableName": this.LableName,
      "id": item.id
    }
    console.log("data model111", this.model);
    // localStorage.setItem('userid',this.data.userId);
    console.log("label data id111111", item.id);
    this.note.setlabel(this.model)
      .subscribe(response => {
        this.data1 = response
        console.log("label data ", this.LableName)
        this.snackBar.open('add label successfully', 'End Now', { duration: 3000 })
      },
        error => {
          console.log(error)
          this.snackBar.open('Not added', 'End Now', { duration: 3000 })
        }
      )
  }

}





