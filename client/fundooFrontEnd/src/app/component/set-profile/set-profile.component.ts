import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { HttpServiceService } from '../../services/httpService/http-service.service';

@Component({
  selector: 'app-set-profile',
  templateUrl: './set-profile.component.html',
  styleUrls: ['./set-profile.component.scss']
})
export class SetProfileComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<SetProfileComponent>,
    private httpService: HttpServiceService, private snackbar: MatSnackBar, 
    @Inject(MAT_DIALOG_DATA) public data: any, ) { }
  private apiImage;
  private croppedImage;

  ngOnInit() {
  }
  imageCropped(event) {
    this.croppedImage = event
    console.log("image name",this.croppedImage);
    
  }


  uploadpic() {
    this.apiImage = this.croppedImage.file
    const uploadData = new FormData();
    uploadData.append('file', this.apiImage, this.apiImage.name);
    console.log("data", uploadData);
    this.httpService.postNewData(uploadData).subscribe(
      (response: any) => {
        this.dialogRef.close();
        localStorage.setItem("profilePic", response.result);
        // this.profile = localStorage.getItem('Profile')
        console.log(response);
        this.snackbar.open('image uploaded Successfully..', 'End now', { duration: 1000 });
      },
      error => {
        console.log(error);
        this.snackbar.open('image not uploaded', 'End now', { duration: 1000 });
      }
    )
  }

}
