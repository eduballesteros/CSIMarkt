import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Usuario } from '../../models/usuario';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  usuario: Usuario = { id: '', username: '', email: '', password: '' };
  message: string = '';
  isSuccess: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  /**
   * Método principal de inicio de sesión donde se comprueba que se han ingresado los campos de email y contraseña y comprueba que los campos
   * coinciden.
   * @returns
   */

  login() {
    if (!this.usuario.email || !this.usuario.password) {
      this.message = 'Por favor, ingresa ambos campos.';
      this.isSuccess = false;
      return;
    }


    this.userService.login(this.usuario.email, this.usuario.password).subscribe({
      next: (response) => {
        if (response.success) {
          this.message = response.message;
          this.isSuccess = true;
          this.router.navigate(['/dashboard']);
        } else {
          this.message = response.message || 'Credenciales incorrectas';
          this.isSuccess = false;
        }
      },
      error: (err) => {
        console.error('Error en el login:', err);
        this.message = 'Ocurrió un problema al iniciar sesión. Inténtalo más tarde.';
        this.isSuccess = false;
      },
    });
  }

  /**
   * Método que redirige al método de registro.
   */
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
