import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NotesService } from 'src/app/services/notes.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data1: any,
    private notes: NotesService, private activeRoute: ActivatedRoute) { }


  model: any;
  data: any;
  
  ngOnInit() {
  }
  title = new FormControl('', [Validators.required])
  discription = new FormControl('', [Validators.required])

  updateNote() {
    this.model = {
      'title': this.title.value,
      'discription': this.discription.value,
    }

    console.log("body :", this.model);


    this.notes.updateNote(this.model).subscribe(
      data => {
        console.log("data after update notes: ", data);

      },
      error => {
        console.log("data after update notes: ", error);

      }
    )
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
