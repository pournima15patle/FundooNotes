import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  
  constructor(private user: UserService) { }
  data: any;
  model: any;
  email = new FormControl('', [Validators.required, Validators.email])

  ngOnInit() {
  }

  next() {

    this.model = {
      'email': this.email.value,
    }

    this.user.forgotPassword(this.model).subscribe(
      data => {
        console.log("data after forgot password: ",data);
        
      },
      error => {
       console.log("data after forgot password: ", error);

      }
    )
  }
}
