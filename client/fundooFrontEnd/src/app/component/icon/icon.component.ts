import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { SelectControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() noteData: any;
  @Output() reminder = new EventEmitter();
  @Output() color=new EventEmitter();
  model: any
  flag=false
  constructor(private note: NotesService) { }

  ngOnInit() {
  
    
  }


  todayDate() {
    
    var currentDate = new Date()
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    var time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    var date=  month + "-" + day + "-" + year +" "+time
    this.reminder.emit(date);
    console.log("date",date);
    
  }

  tomarrowDate() {
    var currentDate =new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    var time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    var date=  month + "-" + day + "-" + year +" "+time
    this.reminder.emit(date);
    console.log("date",date);
  }
  
 
  nextWeek(){
    var currentDate =new Date(new Date().getTime() + 24 * 60 * 60 * 1000*6);
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    var time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    var date=  month + "-" + day + "-" + year +" "+time
    this.reminder.emit(date);
    console.log("date",date);
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

  setColor(notecolors){
    this.color.emit(notecolors)
  }
  
  isArchive(){
    this.model={
      id:this.noteData.id,
      isArchive:this.flag=true,
    }

    this.note.setArchive(this.model).subscribe(
      data => {
        console.log("data with set archive: ", data);
        //this.snackBar.open('Register successfully' ,'EndNow',{duration: 3000});
        
      },
      error => {
       console.log("error with set archive:", error);
       //this.snackBar.open('Register failed' ,'EndNow',{duration: 3000});
      }
    )
  }

  isTrash(){
    this.model={
      id:this.noteData.id,
      isTrash:this.flag=true,
    }

    this.note.setTrash(this.model).subscribe(
      data => {
        console.log("data with set trash: ", data);
        //this.snackBar.open('Register successfully' ,'EndNow',{duration: 3000});
        
      },
      error => {
       console.log("error with set trash:", error);
       //this.snackBar.open('Register failed' ,'EndNow',{duration: 3000});
      }
    )
  }
}





