import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private user:UserService) { }

  data: any;
  model: any;
  firstName = new FormControl('', [Validators.required])
  lastName = new FormControl('', [Validators.required])
  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required, Validators.pattern
    ('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])

  ngOnInit() {
  }
  
 next(){
   console.log("name",this.firstName.value);
   
    
    this.model = {
      'firstName': this.firstName.value,
      'lastName': this.lastName.value,
      'email': this.email.value,
      'password': this.password.value
    }
    console.log("body :",this.model);
    
    
     this.user.register(this.model).subscribe(
       data => {
         console.log("data after register: ", data);
         
       },
       error => {
        console.log("data after register: ", error);

       }
     )

  }
  
}

// import { Component, OnInit } from '@angular/core';
// import { Validators, FormControl } from '@angular/forms';
// import { UserServiceService } from 'src/app/services/user-service.service'
// import { MatSnackBar } from '@angular/material';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent implements OnInit {

//   constructor(private userService: UserServiceService, private snackBar: MatSnackBar) { }

//   data: any;
//   model: any;
//   firstName = new FormControl('', [Validators.required])
//   lastName = new FormControl('', [Validators.required])
//   email = new FormControl('', [Validators.required, Validators.email])
//   password = new FormControl('', [Validators.required, Validators.pattern
//     ('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
//   ngOnInit() {
//   }
//   getEmailError() {
//     return this.email.hasError('required') ? 'email cannot be empty' :
//       this.email.hasError('pattern') ? 'invalid email' : ''
//   }
//   getPassError() {
//     return this.password.hasError('required') ? 'password cannot be empty' :
//       this.password.hasError('pattern') ? 'invalid password' : ''
//   }
//   getNameError() {
//     return this.firstName.hasError('required') ? 'field cannot be empty' :
//       this.firstName.hasError('pattern') ? 'invalid name' : ''
//   }
//   next() {
//     this.model = {
//       firstName: this.firstName.value,
//       lastName: this.lastName.value,
//       email: this.email.value,
//       password: this.password.value,
//     }
//     console.log("data", this.model);
//     this.userService.register(this.model).subscribe(
//       response => {
//         this.data = response
//         console.log("data of register ", this.data)
//         this.snackBar.open('register successfully', 'End Now', { duration: 3000 })
//       },
//       error => {
//         console.log(error)
//         this.snackBar.open('Not Registered', 'End Now', { duration: 3000 })
//       }
//     )

//   }
// }