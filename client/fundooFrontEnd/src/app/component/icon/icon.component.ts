import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
@Input() noteData:any;
  constructor( private note:NotesService) { }

  ngOnInit() {
  }

  
  todayDate(){
    var myDate = new Date();
    var date = myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate();
    var time = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
    var date = myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate();
    var time = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
    var dateTime = date + ' ' + time;
    console.log("note id",this.noteData._id);
    const data = {  
    noteID: this.noteData._id,
    reminder: dateTime
    }
    
    console.log("\ndate and Time = ", dateTime);
    
    this.note.todayDate(data).subscribe(data => {
    console.log("reminder")
    },
    (err) => {
    console.log(err, "err")
    })
    
    
  }


  colorArray = [
    [
    { name: "white", hexcode: "#ffffff" },
    { name: "lightGreen", hexcode: "#90ee90" },
    { name: "purple", hexcode: "#800080" },
    { name: "red", hexcode: "#ff0000" },
    ],
    [
    { name: "Teal", hexcode: "#008080" },
    { name: "pink", hexcode: "#ffc0cb" },
    { name: "orange", hexcode: "#ffa500" },
    { name: "blue", hexcode: "#0000ff" },
    ],
    [
    { name: "brown", hexcode: "#a52a2a" },
    { name: "yellow", hexcode: "#ffff00" },
    { name: "darkBlue", hexcode: "#00008b" },
    { name: "gray", hexcode: "#808080" }
    ]
    ]
}
