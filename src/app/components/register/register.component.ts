import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { catchError } from 'rxjs';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/usuario';  // Importa el modelo Usuario

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule, CommonModule]  // Importamos CommonModule
})
export class RegisterComponent {
  usuario: Usuario = {       // Creamos el objeto 'usuario' con el tipo Usuario
    id: '',                   // Inicializamos el id vacío, si es necesario
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

  register() {
    // Validación de las contraseñas
    if (this.usuario.password !== this.confirmPassword) {
      this.message = 'Las contraseñas no coinciden.';
      this.isSuccess = false;
      return;
    }

    // Validación de campos vacíos
    if (!this.usuario.email || !this.usuario.username || !this.usuario.password || !this.confirmPassword) {
      this.message = 'Por favor, completa todos los campos.';
      this.isSuccess = false;
      return;
    }

    // Validación de si el correo ya está registrado
    this.userService.checkEmailExists(this.usuario.email).subscribe(emailExists => {
      if (emailExists) {
        this.message = 'El correo electrónico ya está registrado.';
        this.isSuccess = false;
      } else {
        // Si el correo no está registrado, proceder con el registro
        this.userService.register(this.usuario.username, this.usuario.email, this.usuario.password).pipe(
          catchError(error => {
            console.error('Error al registrar:', error);  // Log de error
            this.message = 'Hubo un problema al registrar el usuario. Inténtalo de nuevo más tarde.';
            this.isSuccess = false;
            return of(null);  // Evitar que el flujo de la suscripción falle
          })
        ).subscribe(response => {
          // Asegurarnos de que la respuesta tiene el formato esperado
         // Asegurarnos de que la respuesta tiene el formato esperado
          if (response && response.success) {
            this.message = 'Error desconocido al registrar el usuario.';
            this.isSuccess = true;  // Cambiar a 'true' en caso de éxito
          } else {
            this.message = response?.message || 'Correo electronico registrado correctamente';
            this.router.navigate(['/dashboard']);  // Redirigir al login tras el registro
            this.isSuccess = false;
          }
        });
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
