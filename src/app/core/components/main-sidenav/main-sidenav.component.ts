import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-sidenav',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
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
