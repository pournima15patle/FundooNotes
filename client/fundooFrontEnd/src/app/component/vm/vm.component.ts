import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddVMComponent } from '../add-vm/add-vm.component';

@Component({
  selector: 'app-vm',
  templateUrl: './vm.component.html',
  styleUrls: ['./vm.component.scss']
})
export class VMComponent implements OnInit {
 

  constructor( private dialog: MatDialog,) { }

  ngOnInit() {
  }


  addVmDialog() {

    const dialogRef = this.dialog.open(AddVMComponent, {

      width: '410px',
      height:'505px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The VmDialog dialog was closed', result);

    });
  }
}
