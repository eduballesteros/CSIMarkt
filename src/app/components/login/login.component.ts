import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importa Router para la navegación
import { UserService } from '../../services/user.service';  // Importa tu servicio de usuario
import { CommonModule } from '@angular/common';  // Importa CommonModule para directivas como ngClass
import { FormsModule } from '@angular/forms';  // Importa FormsModule para el uso de ngModel

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,  // Esto permite que el componente funcione sin un módulo
  imports: [CommonModule, FormsModule]  // Importa CommonModule para habilitar ngClass
})
export class LoginComponent {
  email = '';  // Cambié 'username' por 'email' para ser consistente con el formulario HTML
  password = '';
  message = '';
  isSuccess: boolean = false; // Asegúrate de definir esta propiedad correctamente

  constructor(
    private userService: UserService,  // Servicio de usuario
    private router: Router  // Inyecta el router para la navegación
  ) {}

  login() {
    if (!this.email || !this.password) {
      this.message = 'Por favor, ingresa ambos campos.';
      this.isSuccess = false;
      return;
    }

    // Llamada al servicio de usuario para validar las credenciales
    this.userService.login(this.email, this.password).subscribe(response => {
      if (response.success) {
        // Si las credenciales son correctas
        this.message = response.message;
        this.isSuccess = true;
        this.router.navigate(['/dashboard']);  // Redirige a la página de inicio (o dashboard)
      } else {
        // Si las credenciales son incorrectas
        this.message = response.message || 'Credenciales incorrectas';
        this.isSuccess = false;
      }
    });
  }

  // Función para redirigir a la página de registro
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
