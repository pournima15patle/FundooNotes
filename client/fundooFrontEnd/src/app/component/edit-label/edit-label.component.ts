import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.scss']
})
export class EditLabelComponent implements OnInit {

  constructor(private labels : NotesService) { }
  label = new FormControl('', [Validators.required])
  ngOnInit() {
  }
  createLabel(){
    console.log("label clicking")
    console.log("label value",this.label.value);
   
   var uid = localStorage.getItem('userid');
   console.log("this is uid ", uid)
    const reqbody = {
      'userModelId': uid,
      'labelName': this.label.value
      
    }
    console.log("body :", reqbody);
    
    
     this.labels.createLabelIn(reqbody).subscribe(
       data => {
         console.log("data createlabel ts file: ", data);
         //this.snackBar.open('Register successfully' ,'EndNow',{duration: 3000});
         
       },
       error => {
        console.log("data createlabel ts file:", error);
        //this.snackBar.open('Register failed' ,'EndNow',{duration: 3000});
       }
     )

  }
  
  
}
