import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Navegación entre rutas
import { UserService } from '../../services/user.service';  // Servicio de usuario
import { Usuario } from '../../models/usuario';  // Modelo Usuario
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
  usuario: Usuario = { id: '', username: '', email: '', password: '' }; // Modelo del usuario
  message: string = '';  // Mensaje de éxito o error
  isSuccess: boolean = false; // Indica si el login fue exitoso

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  login() {
    if (!this.usuario.email || !this.usuario.password) {
      this.message = 'Por favor, ingresa ambos campos.';
      this.isSuccess = false;
      return;
    }

    // Llamar al servicio para validar las credenciales
    this.userService.login(this.usuario.email, this.usuario.password).subscribe({
      next: (response) => {
        if (response.success) {
          this.message = response.message;
          this.isSuccess = true;
          this.router.navigate(['/dashboard']); // Redirige al dashboard
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

  // Redirigir a la página de registro
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
