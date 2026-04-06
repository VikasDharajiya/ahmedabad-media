import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageHeader } from '@shared/components/page-header/page-header';
import { Button } from '@shared/components/button/button';

@Component({
  selector: 'app-add-category',
  imports: [FormsModule, PageHeader, Button],
  templateUrl: './add-category.html',
  styleUrl: './add-category.css',
})
export class AddCategory {
  categoryForm = {
    name: '',
    status: 'active',
    sequence: null,
  };

  resetForm() {
    this.categoryForm = {
      name: '',
      status: '',
      sequence: null,
    };
  }

  saveCategory(): void {
    console.log('Saving category:', this.categoryForm);

    this.resetForm();
  }
}
