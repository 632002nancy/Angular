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
  loginPage: boolean = true;

  @ViewChild('adminForm') form: NgForm;
  @ViewChild('userForm') uform: NgForm;

  showAdmin(): void {
    this.adminClicked = true
  }
  showUser(): void {
    this.userClicked = true
  }

  adminVerified(data: { name: string, password: string }): void {
    let verified = this.authService.adminLogin(data);
    if (verified) {
      this.loginPage = false;
      this.router.navigate(['/admin']);
    }
    else {
      alert('Provide Valid User Name or Password, Please try again !!!');
    }
  }

  userVerified(): void {
    this.authService.userLogin();
    this.loginPage = false;
    this.router.navigate(['/users']);
  }
}
