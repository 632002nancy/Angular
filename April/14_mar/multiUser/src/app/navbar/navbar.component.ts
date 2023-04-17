import { Component } from '@angular/core';
import { AuthService } from '../Services/adminAuth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthService) { }

  adminLogOut(): void {
    this.authService.adminLogOut()
  }
}
