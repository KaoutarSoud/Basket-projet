import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  resetEmail: string = '';
  showResetPassword: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    try {
      const userCredential = await this.authService.login(this.email, this.password);
      if (userCredential.user.emailVerified) {
        this.router.navigate(['/favoris']);
      } else {
        alert('Please verify your email before logging in.');
        await this.authService.sendEmailVerification(userCredential.user);
      }
    } catch (error) {
      console.error('Error logging in', (error as Error).message);
      alert('Login failed: ' + (error as Error).message);
    }
  }

  showResetForm() {
    this.showResetPassword = true;
  }

  cancelReset() {
    this.showResetPassword = false;
  }

  async resetPassword() {
    try {
      await this.authService.resetPassword(this.resetEmail);
      alert('E-mail de réinitialisation envoyé !');
      this.showResetPassword = false;
    } catch (error) {
      console.error('Error sending password reset email', (error as Error).message);
      alert('Failed to send password reset email: ' + (error as Error).message);
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
