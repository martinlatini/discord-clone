import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar-menu.component.html',
  styleUrl: './side-bar-menu.component.css',
})
export class SideBarMenuComponent {
  arrMenu1: { text: string; id: number }[] = [
    { text: 'Home', id: 1 },
    { text: 'Download', id: 2 },
    { text: 'Nitro', id: 3 },
    { text: 'Discover', id: 4 },
  ];
  arrMenu2: { text: string; id: number }[] = [
    { text: 'Support', id: 5 },
    { text: 'Blog', id: 6 },
    { text: 'Careers', id: 7 },
  ];
}
