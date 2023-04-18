import { Component } from '@angular/core';
import { AuthService } from '../Services/adminAuth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(private authService: AuthService) { }

  userLogOut(): void {
    this.authService.adminLogOut()
  }
}
