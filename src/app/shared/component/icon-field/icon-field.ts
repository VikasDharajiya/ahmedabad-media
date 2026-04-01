import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonIcon } from 'primeng/button';

@Component({
  selector: 'app-icon-field',
  standalone: true,
  imports: [FormsModule, InputTextModule, IconFieldModule, InputIconModule, ButtonIcon],
  templateUrl: './icon-field.html',
})
export class IconField {
  @Input() placeholder = 'Search';
  @Input() model = '';

  @Output() modelChange = new EventEmitter<string>();

  onInput(value: string) {
    this.model = value;
    this.modelChange.emit(value);
  }
}
