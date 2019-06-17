import { Component, OnInit } from '@angular/core';
import { VmService } from '../../services/vm.service';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { VMComponent } from '../vm/vm.component';

@Component({
  selector: 'app-add-vm',
  templateUrl: './add-vm.component.html',
  styleUrls: ['./add-vm.component.scss']
})
export class AddVMComponent implements OnInit {
  model: any;
  data:any;
  userName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  startDate = new FormControl('', [Validators.required]);
  endDate = new FormControl('', [Validators.required]);
  gitId = new FormControl('', [Validators.required]);

  constructor( private vmService:VmService,
               private snackBar:MatSnackBar,
               public dialogRef: MatDialogRef<VMComponent>, ) { }

  ngOnInit() {
  }

  creatVm(){
    this.model={
      'userName':this.userName.value,
      'email':this.email.value,
      'phone':this.phone.value,
      'startDate':this.startDate.value,
      'endDate':this.endDate.value,
      'gitId':this.gitId.value
    }
    console.log("requested data:",this.model);
    

    this.vmService.addVmUser(this.model).subscribe(
      data => {
        console.log("data after creating user: ", data);
        this.snackBar.open('user added successfully' ,'EndNow',{duration: 3000});
      },
      error => {
        console.log("error after creating user: ", error);
        this.snackBar.open('user added failed' ,'EndNow',{duration: 3000});
      }
    )
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
