import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormCard } from '../../../shared/component/form-card/form-card';
import { PageHeader } from '../../../shared/component/page-header/page-header';

@Component({
  selector: 'app-add-category',
  imports: [FormsModule, FormCard, PageHeader],
  templateUrl: './add-category.html',
  styleUrl: './add-category.css',
})
export class AddCategory {
  categoryForm = {
    name: '',
    status: 'active',
  };

  resetForm() {
    this.categoryForm = {
      name: '',
      status: '',
    };
  }

  saveCategory(): void {
    console.log('Saving category:', this.categoryForm);

    this.resetForm();
  }
}
