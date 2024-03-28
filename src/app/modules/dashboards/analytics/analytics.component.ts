import { Component } from '@angular/core';
import {MatRippleModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    MatMenuModule,
    MatRippleModule
  ],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {

}
