import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private user: UserService,private route:Router) { }

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
      data => {
        console.log("data after login: ", data);
        this.route.navigate(['dashboard'])
      },
      error => {
       console.log("data after login: ", error);

      }
    )
  }
}
