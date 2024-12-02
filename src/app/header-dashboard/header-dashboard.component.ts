import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';  // Módulo para la barra de herramientas
import { MatIconModule } from '@angular/material/icon';      // Módulo para los iconos
import { MatButtonModule } from '@angular/material/button';  // Módulo para los botones
import { MatSidenavModule } from '@angular/material/sidenav'; // Módulo para el sidenav
import { MatListModule } from '@angular/material/list';       // Módulo para el listado de navegación

@Component({
  selector: 'app-header-dashboard',
  standalone: true,
  imports: [
    MatToolbarModule,        // Importa los módulos necesarios
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  templateUrl: './header-dashboard.component.html',
  styleUrl: './header-dashboard.component.css'
})
export class HeaderDashboardComponent {

}
