import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/adminAuth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private router: Router, private authService: AuthService) { }
  adminClicked: boolean = false;
  userClicked: boolean = false;
  loginAdmin: string = "admin";
  loginAdminPass: string = "1234";
  loginPage: boolean = true;

  @ViewChild('adminForm') form: NgForm;
  showAdmin(): void {
    this.adminClicked = true
  }
  showUser(): void {
    this.userClicked = true
  }

  adminVerified(data: { adminName: string, adminPass: string }): void {
    if (this.loginAdmin === data.adminName && this.loginAdminPass === data.adminPass) {
      this.loginPage = false;
      this.authService.adminLogin();
      this.router.navigate(['']);
    } else {
      alert('User Name or PassWord does not match, Please try again !!!');
    }
  }
  userVerified(data: string): void {
    this.loginPage = false;
    this.authService.userLogin()
    this.router.navigate(['']);
  }
}
