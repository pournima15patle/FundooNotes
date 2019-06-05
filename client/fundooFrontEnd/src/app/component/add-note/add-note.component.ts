import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { NotesService } from '../../services/notes.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  flag = true;
  gridView = false;

  data: any;
  model: any;
  title = new FormControl('', [Validators.required])
  discription = new FormControl('', [Validators.required])
  dialogRef: any;

  constructor(private notes: NotesService, 
    private activeRoute: ActivatedRoute,
    private snackBar: MatSnackBar) { }
    access_token = this.activeRoute.snapshot.paramMap.get('access_token');

  ngOnInit() {
  }
  reverseFlag() {
    this.flag = !this.flag;
  }
  refresh(): void {
    window.location.reload();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
    
  createnote() {
    this.model = {
      'title': this.title.value,
      'discription': this.discription.value,
    }

    console.log("body :", this.model);


    this.notes.addNote(this.model).subscribe(
      data => {
        console.log("data after creating note: ", data);
        this.snackBar.open('note added successfully' ,'EndNow',{duration: 3000});
      },
      error => {
        console.log("error after creating note: ", error);
        this.snackBar.open('note added failed' ,'EndNow',{duration: 3000});
      }
    )
  }


}
