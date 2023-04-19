import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatInputModule } from '@angular/material/input';


//standalone component so we dont need to register services and other thing to regiter in appmodule to get used here.
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, MatInputModule, NgOptimizedImage],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

}
