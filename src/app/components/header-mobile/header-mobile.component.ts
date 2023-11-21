import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.css',
})
export class HeaderMobileComponent {
  onClick() {}
}
