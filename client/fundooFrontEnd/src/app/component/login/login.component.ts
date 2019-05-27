import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private user: UserService,private route:Router,private snackBar: MatSnackBar) { }

  data: any;
  model: any;
  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required, Validators.pattern
    ('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])

  ngOnInit() {
  }

  next() {

    this.model = {
      'email': this.email.value,
      'password': this.password.value
    }

    this.user.login(this.model).subscribe(
      (data:any) => {
        console.log("data after login: ", data);
       
        localStorage.setItem('access_token',data.id);
        localStorage.setItem('userid',data.userId);
        this.route.navigate(['dashboard'])
       
        this.snackBar.open('login successfully' ,'EndNow',{duration: 3000});
      },
      error => {
       console.log("data after login: ", error);

      }
    )
  }
}
