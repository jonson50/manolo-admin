import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainSidenavComponent } from '../main-sidenav/main-sidenav.component';


@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MainSidenavComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent { }
