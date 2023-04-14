import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../Services/adminAuth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private router:Router, private authService:AuthService){}
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
      this.authService.adminLogin();
       this.router.navigate(['navbar']);
      }else{
        alert('User Name or PassWord does not match, Please try again !!!');
      }
   }
   userVerified(data:string){
    this.authService.userLogin()
     this.router.navigate(['navbar']);
   }
}
