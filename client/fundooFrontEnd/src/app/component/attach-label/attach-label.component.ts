import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-attach-label',
  templateUrl: './attach-label.component.html',
  styleUrls: ['./attach-label.component.scss']
})
export class AttachLabelComponent implements OnInit {
 
  labels: any=[];
  items: any[];
  noteData: any;
  model: { id: any; isArchive: boolean; };

  constructor(private note: NotesService,private snackBar: MatSnackBar) { }

  ngOnInit() {
    // this.getAllLable();
  }

  // getAllLable(){
  //   this.note.getAllLable().subscribe(data => {

  //     console.log("this is getlabels right ", data);
  //     this.labels = data
  //   },
  //   error => {
  //     console.log("error in getAllLabel: ", error);

  //   })
  // }

  // attachLabel(){
  //   // this.model={
  //   //   // id:this.noteData.id,
  //   //   // label:this,
  //   // }
  //   this.note.addLabel(this.model).subscribe(
  //     data => {
  //       console.log("data with set archive: ", data);
  //       this.snackBar.open('add note successfully' ,'EndNow',{duration: 3000});
        
  //     },
  //     error => {
  //      console.log("error with set archive:", error);
  //      this.snackBar.open(' Failed to add note' ,'EndNow',{duration: 3000});
  //     }
  //   )
  // }
}
