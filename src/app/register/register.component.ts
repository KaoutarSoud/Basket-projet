import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  name: string = '';
  phone: string = '';
  email: string = '';
  password: string = '';
 

  async register() {
    try {
      await this.authService.register(this.email, this.password);
      alert('Registration successful! Please check your email for verification.');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error registering', (error as Error).message);
      alert('Registration failed: ' + (error as Error).message);
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
