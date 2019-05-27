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


  title: any;
  discription: any;
  noteID: any;
  model: any;
  data1: any;


  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notes: NotesService, private activeRoute: ActivatedRoute) {
    console.log("this is inside constr  data", data);
    console.log("this is inside constr title", data.noteData.title)
    this.title = new FormControl(data.noteData.title);
    console.log("Title here", this.title);
    this.discription = new FormControl(data.noteData.discription);
    this.noteID = new FormControl(data.noteData.id);
    console.log("this is id", data.noteData.id);
  }

  ngOnInit() {
    console.log(this.data);
  }


  updateNote() {
    console.log("this is dialog reqbody id",this.noteID.value)
    const requestBody = {
      noteId: this.noteID.value,
      title: this.title.value,
      discription: this.discription.value,

    }
    console.log("result",requestBody);
    

    this.notes.updateNote(requestBody).subscribe(
      data => {
        // console.log("inside updatenote dialog", data[0].title)
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
//extra
// title: any;
// description: any;
// color: any;
// noteID: any;
// constructor(
// public dialogRef: MatDialogRef<EditCardComponent>,
// @Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService) {
// console.log("Data",data);
// this.title=new FormControl(data.notedata.title);
// console.log("Title here",this.title);
// this.description=new FormControl(data.notedata.description);
// this.color=new FormControl(data.notedata.color);
// this.noteID=new FormControl(data.notedata._id);
// }
// ngOnInit() {
// console.log(this.data);
// }
// // on no click
// onNoClick(): void {
// console.log('Dialog');
// this.dialogRef.close();
// }

// updatenote(){
// console.log("update",this.title);
// const requestBody={
// noteID:this.noteID.value,
// title:this.title.value,
// description:this.description.value,
// color:this.color.value
// }
// console.log("req",requestBody);
// this.userService.updatenote(requestBody).subscribe(data => {
// console.log(data);
// },
// error => {
// console.log(error);
// });
// }