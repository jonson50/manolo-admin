import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, ViewChild, inject } from '@angular/core';
import { MatDrawerMode, MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MainSidenavComponent } from '../main-sidenav/main-sidenav.component';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { BreakpointObserver, BreakpointState, LayoutModule, MediaMatcher } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';
import { SidenavService } from '../../services/Sidenav.service';
import { RouterOutlet } from '@angular/router';

interface NavConfig {
  mode: MatDrawerMode;
  hasBackdrop: boolean;
 }

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    LayoutModule,
    RouterOutlet,
    MainSidenavComponent,
    MainHeaderComponent
  ],
  providers: [
    SidenavService
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  public navService = inject(SidenavService);

  private maxScreenWidth = 600
  public navConf: NavConfig = {
    hasBackdrop: false,
    mode: 'side'
  }

  @ViewChild('sidenav')
  public sidenav!: MatSidenav;

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    if (this.sidenav) {
      if (event.target.innerWidth < this.maxScreenWidth) {
        this.navConf.hasBackdrop = true;
        this.navConf.mode = 'over';
        this.sidenav.close();
      } else {
        this.navConf.hasBackdrop = false;
        this.navConf.mode = 'side';
        this.sidenav.open();
      }
    }
  }

  ngAfterViewInit(): void {
    this.navService.setSidenav(this.sidenav);
  }

  toggleSideNav(){
    this.sidenav.toggle();
  }
}
