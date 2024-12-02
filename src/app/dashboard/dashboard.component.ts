import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderDashboardComponent } from '../header-dashboard/header-dashboard.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,HeaderDashboardComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  title = 'CSIMarkt -Dashboard';

}
