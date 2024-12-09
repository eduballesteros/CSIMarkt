import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,  // Asegúrate de que sea un componente standalone
  templateUrl: './product-login.component.html',
  styleUrls: ['./product-login.component.css'],
  imports: [RouterModule]
})
export class ProductComponent {
  @Input() product: any;  // La propiedad product debe estar definida como @Input
}
