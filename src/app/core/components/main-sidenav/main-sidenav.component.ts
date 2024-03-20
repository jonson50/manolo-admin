import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main-sidenav',
  standalone: true,
  imports: [
    MatListModule,
    MatExpansionModule,
    MatIconModule
  ],
  templateUrl: './main-sidenav.component.html',
  styleUrl: './main-sidenav.component.scss'
})
export class MainSidenavComponent {
  panelOpenState = false;
}
