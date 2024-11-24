import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('accessToken'); // Remove the access token
    this.router.navigate(['/']); // Redirect to the login page
  }
}