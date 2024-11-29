import { Component } from '@angular/core';
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
  // Lógica adicional si la necesitas
}
