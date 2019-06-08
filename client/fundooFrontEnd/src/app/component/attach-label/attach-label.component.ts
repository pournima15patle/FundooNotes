import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-attach-label',
  templateUrl: './attach-label.component.html',
  styleUrls: ['./attach-label.component.scss']
})
export class AttachLabelComponent implements OnInit {
  labels: any=[];
  items: any[];
  constructor(private note: NotesService) { }

  ngOnInit() {
    this.getAllLable();
  }

  getAllLable(){
    this.note.getAllLable().subscribe(data => {

      console.log("this is getlabels right ", data);
      this.labels = data
    },
    error => {
      console.log("error in getAllLabel: ", error);

    })
  }
}
