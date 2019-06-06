import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-profile',
  templateUrl: './set-profile.component.html',
  styleUrls: ['./set-profile.component.scss']
})
export class SetProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  uploadpic() {
    this.apiImage = this.croppedImage.file
    const uploadData = new FormData();
    uploadData.append('file', this.apiImage, this.apiImage.name);
    this.httpService.postNewData('user/uploadProfileImage',uploadData).subscribe(
    (response:any)=>{
    this.dialogRef.close();
    localStorage.setItem("profilePic", response['status'].imageUrl);
    console.log(response);
    this.snackbar.open('image uploaded Successfully..', 'End now', {duration: 1000}); 
    },
    error=>{
    console.log(error);
    this.snackbar.open('image not uploaded', 'End now', {duration: 1000}); 
    }
    )}
}
