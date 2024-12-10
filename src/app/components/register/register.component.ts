import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { catchError } from 'rxjs';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule, CommonModule]
})
export class RegisterComponent {
  usuario: Usuario = {
    id: '',
    username: '',
    email: '',
    password: '',
  };
  confirmPassword: string = '';
  message: string = '';
  isSuccess: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  /**
   * Método de registro que se encargar de validar las dos contraseñas, valida los campos vacíos,
   * comprueba que ese correo no existe en la API y si todo es correcto inicia sesión automaticamente y
   * te manda a la página principal
   *
   * @returns
   */
  register() {

    if (this.usuario.password !== this.confirmPassword) {
      this.message = 'Las contraseñas no coinciden.';
      this.isSuccess = false;
      return;
    }
    if (!this.usuario.email || !this.usuario.username || !this.usuario.password || !this.confirmPassword) {
      this.message = 'Por favor, completa todos los campos.';
      this.isSuccess = false;
      return;
    }

    this.userService.checkEmailExists(this.usuario.email).subscribe(emailExists => {
      if (emailExists) {
        this.message = 'El correo electrónico ya está registrado.';
        this.isSuccess = false;
      } else {
        this.userService.register(this.usuario.username, this.usuario.email, this.usuario.password).pipe(
          catchError(error => {
            console.error('Error al registrar:', error);
            this.message = 'Hubo un problema al registrar el usuario. Inténtalo de nuevo más tarde.';
            this.isSuccess = false;
            return of(null);
          })
        ).subscribe(response => {
          if (response && response.success) {
            this.message = 'Error desconocido al registrar el usuario.';
            this.isSuccess = true;  // Cambiar a 'true' en caso de éxito
          } else {
            this.message = response?.message || 'Correo electronico registrado correctamente';
            this.router.navigate(['/dashboard']);
            this.isSuccess = false;
          }
        });
      }
    });
  }
/**
 * Método que redirige a la página del login.
 */
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
