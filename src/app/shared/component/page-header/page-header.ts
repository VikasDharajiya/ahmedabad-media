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
  @Input() title = '';
  @Input() addButtonLabel = 'Add';
  @Input() addButtonRoute: string | string[] = '/';
}
