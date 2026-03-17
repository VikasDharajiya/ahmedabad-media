import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-tooltip',
  imports: [CommonModule],
  templateUrl: './info-tooltip.html',
  styleUrl: './info-tooltip.css',
})
export class InfoTooltip {
  @Input() text: string = '';
  @Input() position: 'right' | 'left' | 'top' | 'bottom' = 'right';
}
