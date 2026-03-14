import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Button } from '../button/button';

@Component({
  selector: 'app-form-card',
  imports: [RouterModule, CommonModule, Button],
  templateUrl: './form-card.html',
  styleUrl: './form-card.css',
})
export class FormCard {
  @Input() saveLabel = '';
  @Input() cancelRoute: string | string[] = '/';
  /** Tailwind max-width class. Default 'max-w-xl' for small forms, pass 'max-w-full' for wide forms */
  @Input() maxWidthClass = 'max-w-xl';
}
