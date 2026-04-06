import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Button } from '../button/button';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [RouterModule, ButtonModule, Button],
  templateUrl: './page-header.html',
})
export class PageHeader {
  @Input() title = '';

  @Input() addButtonLabel = '';
  @Input() addButtonRoute: string | string[] = '/';

  @Input() backRoute: string | string[] | null = null;
  @Input() extraButtonLabel?: string;
  @Output() extraClick = new EventEmitter<void>();
  @Output() addClick = new EventEmitter<void>();
}
