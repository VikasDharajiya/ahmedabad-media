import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageHeader } from '@shared/component/page-header/page-header';
import { TextEditor } from '@shared/component/text-editor/text-editor';
import { Button } from '@shared/component/button/button';

@Component({
  selector: 'app-add-news',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PageHeader,
    TextEditor,
    Button,
    ReactiveFormsModule,
  ],
  templateUrl: './add-news.html',
})
export class AddNews {
  @ViewChild('newsDetailsEditor') newsDetailsEditor?: TextEditor;
  @ViewChild('imageInput') imageInput!: ElementRef;

  // ── News form ─────────────────────────────────────────────────────────────
  newsForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.newsForm = this.fb.group({
      titleHighlight: [''],
      title: [''],
      category: [''],
      status: ['Draft'],
      scheduled: [false],
      scheduledAt: [null],
      thumbnail: [null],
      details: [''],
    });
  }

  categories: string[] = ['શહેર સમાચાર', 'રાજ્ય સમાચાર', 'ક્રાઈમ'];
  // types: string[] = ['Normal', 'Live News', 'Sponsored'];
  // statuses: string[] = ['Draft', 'Published', 'Scheduled'];

  //  image
  imagePreview: string | null = null;
  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    this.newsForm.patchValue({
      image: file,
    });
    this.imagePreview = URL.createObjectURL(file);
  }

  removeImage() {
    if (this.imagePreview) {
      URL.revokeObjectURL(this.imagePreview);
    }

    this.newsForm.patchValue({
      image: null,
    });
    this.imagePreview = null;
  }

  // ── Save news ─────────────────────────────────────────────────────────────

  saveNews() {
    if (this.newsForm.invalid) return;

    const payload = this.newsForm.value;
    console.log('Saving News:', payload);

    // API call here
    this.newsForm.reset({
      type: 'Normal',
      status: 'Draft',
      scheduled: false,
    });

    this.imagePreview = null;
    this.newsDetailsEditor?.setContent('');
  }
}
