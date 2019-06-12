import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddNoteComponent } from './component/add-note/add-note.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { ReminderComponent } from './component/reminder/reminder.component';
import { TrashComponent } from './component/trash/trash.component';
import { RetriveAllNotesComponent } from './component/retrive-all-notes/retrive-all-notes.component';
import { SearchComponent } from './component/search/search.component';
import { VMComponent } from './component/vm/vm.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
    
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'forgotPassword',
    component:ForgotPasswordComponent
  },
  {
    path:'resetPassword/:access_token',
    component:ResetPasswordComponent
  },

  {
    path:'dashboard',
    component:DashboardComponent,

    children:[
      {
        path:'',
        component:AddNoteComponent
      },
      {
        path:'search',
        component:SearchComponent
      },
      {
        path:'getAllNotes',
        component:RetriveAllNotesComponent
      },
      {
        path:'addNote',
        component:AddNoteComponent
      },
      {
        path:'archive',
        component:ArchiveComponent
      },
      
      {
        path:'reminder',
        component:ReminderComponent
      },
      {
        path:'retriveAllNotes',
        component:RetriveAllNotesComponent
      },
      {
        path:'trash',
        component:TrashComponent
      },
      {
        path:'virtualUser',
        component:VMComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
