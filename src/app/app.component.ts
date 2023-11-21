import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeroComponent,
    SideBarComponent,
    HeaderMobileComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
