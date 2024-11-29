import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,  // Asegúrate de que sea un componente standalone
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: any;  // La propiedad product debe estar definida como @Input
}
