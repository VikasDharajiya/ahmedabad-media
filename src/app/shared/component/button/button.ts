import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [CommonModule, RouterModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() label = '';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() variant: 'primary-btn' | 'secondary-btn' = 'primary-btn';
  @Input() routerLink?: string | any[];
  @Input() loading = false;
  @Input() styleClass = '';
}
