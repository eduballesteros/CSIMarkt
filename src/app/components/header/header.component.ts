import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importa Router para la navegación
import { MatToolbarModule } from '@angular/material/toolbar';  // Módulo para la barra de herramientas
import { MatIconModule } from '@angular/material/icon';      // Módulo para los iconos
import { MatButtonModule } from '@angular/material/button';  // Módulo para los botones
import { MatSidenavModule } from '@angular/material/sidenav'; // Módulo para el sidenav
import { MatListModule } from '@angular/material/list';       // Módulo para el listado de navegación

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,        // Importa los módulos necesarios
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  // Método para redirigir a la página de login
  goToLogin() {
    this.router.navigate(['/login']);
  }

  // Método para redirigir a la página de registro
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
