import { Component , ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
 adminClicked:boolean=false;
 userClicked:boolean=false;
 loginAdmin:string="admin";
 loginAdminPass:string="1234";

@ViewChild('adminForm') aform:NgForm;
@ViewChild('userForm') uform:NgForm;

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
    
  }
  userVerified(data:string){
    console.log(data)
  }
}
