import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
 import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  

  constructor(private user: UserService,private snackBar: MatSnackBar ,private activeRoute: ActivatedRoute) { }
  access_token = this.activeRoute.snapshot.paramMap.get('access_token');
  // console.log(access_token);
  
  data: any;
  model: any;
  
  password = new FormControl('', [Validators.required, Validators.pattern
    ('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])

  ngOnInit() {
    

    localStorage.setItem('access_token', this.access_token)
    console.log("gjhg",this.access_token);
    
  }

  next() {

    console.log("AAAAA........",this.activeRoute);
    
    this.model = {
      'newPassword': this.password.value,
    }

    this.user.resetPassword(this.model).subscribe(
      data => {
        console.log("data after reseting password: ",data);
        this.snackBar.open('password reseted successfully' ,'EndNow',{duration: 3000});
      },
      error => {
       console.log("data after reseting password: ", error);

      }
    )
  }
}
// export class ResetComponent implements OnInit {
//   constructor(private userService: UserServiceService, private snackBar: MatSnackBar, private activeRoute: ActivatedRoute) { }
//   access_token = this.activeRoute.snapshot.paramMap.get('access_token')
//   data: any;
//   model: any;
  
//   password = new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
//   ngOnInit() {
//   console.log("token", this.access_token);
//   localStorage.setItem('access_token', this.access_token)
//   }
//   getPassError() {
//   return this.password.hasError('required') ? 'password cannot be empty' :
//   this.password.hasError('pattern') ? 'invalid password' : ''
//   }
//   next() {
//   this.model = {
//   password: this.password.value,
//   }
//   console.log("data", this.model);
  
//   this.userService.login(this.model).subscribe(
//   (response: any) => {
//   // console.log("ffgfggg=>", response);
//   console.log("reset", this.data)
//   this.snackBar.open('Reset successfully', 'End Now', { duration: 3000 })
//   },
//   error => {
//   console.log(error)
//   this.snackBar.open('Enter proper password', 'End Now', { duration: 3000 })
//   }
  
  
//   )
  
  
//   }
  
  
//   }