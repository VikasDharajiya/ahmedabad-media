import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [RouterModule, ButtonModule],
  templateUrl: './page-header.html',
})
export class PageHeader {
  /** Page title */
  @Input() title = '';

  // ── List page inputs (add button variant) ────────────────────────────────
  @Input() addButtonLabel = 'Add';
  @Input() addButtonRoute: string | string[] = '/';

  /** When provided, renders the back-arrow variant instead of the add-button variant */
  @Input() backRoute: string | string[] | null = null;
}
