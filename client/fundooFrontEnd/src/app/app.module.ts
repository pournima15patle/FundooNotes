import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { AppMaterial } from './app.module.appMaterial';
import { RegisterComponent } from './component/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { HttpServiceService } from './services/httpService/http-service.service';
import { UserService } from './services/user.service';
import { DashboardComponent } from './component/dashboard/dashboard.component';

import { AddNoteComponent } from './component/add-note/add-note.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { ReminderComponent } from './component/reminder/reminder.component';
import { TrashComponent } from './component/trash/trash.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { IconComponent } from './component/icon/icon.component';
import { RetriveAllNotesComponent } from './component/retrive-all-notes/retrive-all-notes.component';
import { EditCardComponent } from './component/edit-card/edit-card.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogBoxComponent } from './component/dialog-box/dialog-box.component';
import { EditLabelComponent } from './component/edit-label/edit-label.component';
import { AppRoutingModule } from './app-routing.module';
import { GetAllLableComponent } from './component/get-all-lable/get-all-lable.component';
import { SearchComponent } from './component/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    AddNoteComponent,
    ArchiveComponent,
    ReminderComponent,
    TrashComponent,
    IconComponent,
    RetriveAllNotesComponent,
    EditCardComponent,
    DialogBoxComponent,
    EditLabelComponent,
    GetAllLableComponent,
    SearchComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterial,
    BrowserAnimationsModule,
    HttpClientModule,MatSidenavModule,
    MatToolbarModule,MatDialogModule,

   
  ],
  providers: [HttpServiceService,UserService],
  entryComponents:[DialogBoxComponent,EditLabelComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
