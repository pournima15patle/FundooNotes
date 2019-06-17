import { Component, OnInit } from '@angular/core';
import { VmService } from '../../services/vm.service';

@Component({
  selector: 'app-get-all-vmuser',
  templateUrl: './get-all-vmuser.component.html',
  styleUrls: ['./get-all-vmuser.component.scss']
})
export class GetAllVMUserComponent implements OnInit {
  users: any=[];
  items: any[];
  constructor(private vm:VmService) { }

  ngOnInit() {
      this.getUsers();
  }


  getUsers() {
    this.vm.getUser().subscribe(
      data => {
        console.log("data of getAllNotes in retriveAll Notes : ", data);
        this.users=data
        console.log("dfjhdlgdfg",this.users.toString());
        
      },
      error => {
        console.log("error of getAllNotes: ", error);

      }
    )
  }
}
