import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarMenuComponent } from '../side-bar-menu/side-bar-menu.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, SideBarMenuComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {}
