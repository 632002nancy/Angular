import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private router:Router){}
  adminClicked:boolean=false;
  userClicked:boolean=false;
  loginAdmin:string="admin";
  loginAdminPass:string="1234";
 
   showAdmin(){
     this.adminClicked=true
   }
   showUser(){
     this.userClicked=true
   }
 
   adminVerified(data){
     if(this.loginAdmin===data.adminName && this.loginAdminPass===data.adminPass){
       console.log("verified");
      }
      this.router.navigate(['/admin']);
     
   }
   userVerified(data:string){
     console.log(data)
     this.router.navigate(['/users']);
   }
}
