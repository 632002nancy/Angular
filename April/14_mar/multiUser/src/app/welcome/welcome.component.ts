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
  loginAdmin: string = "admin";
  loginAdminPass: string = "1234";
  loginPage: boolean = true;

  @ViewChild('adminForm') form: NgForm;
  showAdmin(): void {
    this.adminClicked = true
  }

  ngOnInit() {
    this.authService.adminProfileLogin();
  }

  adminVerified(data: { name: string, password: string }): void {
    if (data.name && data.password) {
      this.authService.adminLogin(data);
      this.loginPage = false;
    }
    else {
      alert('Provide Valid User Name or PassWord, Please try again !!!');
    }
  }
}
