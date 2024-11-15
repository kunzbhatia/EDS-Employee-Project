import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Optional: Clear localStorage or perform any initialization tasks
  }

  login(): void {
    if (this.loginForm.valid) {
      // Assuming login success here
      console.log('Logging in', this.loginForm.value);

      // Simulating a successful login (you can replace this with your API call)
      localStorage.setItem('accessToken', 'fake-access-token');
      
      // Navigate to the employees page after successful login
      this.router.navigate(['/employees']);
    } else {
      // Show validation error if the form is not valid
      console.log('Form is invalid');
    }
  }
}
