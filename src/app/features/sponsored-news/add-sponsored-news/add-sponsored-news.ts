import { Component, ElementRef, ViewChild } from '@angular/core';
import { TextEditor } from '../../../shared/component/text-editor/text-editor';
import { FormsModule } from '@angular/forms';
import { FormCard } from '../../../shared/component/form-card/form-card';
import { PageHeader } from '../../../shared/component/page-header/page-header';

@Component({
  selector: 'app-add-sponsored-news',
  imports: [TextEditor, FormsModule, FormCard, PageHeader],
  templateUrl: './add-sponsored-news.html',
  styleUrl: './add-sponsored-news.css',
})
export class AddSponsoredNews {
  @ViewChild('newsDetailsEditor') newsDetailsEditor?: TextEditor;
  @ViewChild('imageInput') imageInput!: ElementRef;

  // constructor(private zone: NgZone) {}
  // constructor(private cdr: ChangeDetectorRef) {}

  // ── News form ─────────────────────────────────────────────────────────────
  newsForm = {
    titleHighlight: '',
    title: '',
    category: '',
    type: 'Normal',
    status: 'Draft',
    author: '',
    scheduled: false,
    scheduledAt: null as Date | null,
    image: null as File | null,
    details: '',
  };

  categories: string[] = ['શહેર સમાચાર', 'રાજ્ય સમાચાર', 'ક્રાઈમ'];

  types: string[] = ['Normal', 'Live News', 'Sponsored'];

  statuses: string[] = ['Draft', 'Published', 'Scheduled'];

  //  image
  imagePreview: string | null = null;
  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    this.newsForm.image = file;

    this.imagePreview = URL.createObjectURL(file);
  }

  removeImage() {
    if (this.imagePreview) {
      URL.revokeObjectURL(this.imagePreview);
    }

    this.newsForm.image = null;
    this.imagePreview = null;
  }

  // ── Save news ─────────────────────────────────────────────────────────────

  private get emptyNewsForm() {
    return {
      titleHighlight: '',
      title: '',
      category: '',
      type: 'Normal',
      status: 'Draft',
      author: '',
      scheduled: false,
      scheduledAt: null as Date | null,
      image: null as File | null,
      details: '',
    };
  }

  saveNews(): void {
    console.log('Saving news:', this.newsForm);
    // this.newsService.create(this.newsForm).subscribe(...)

    // Reset form
    this.newsForm = this.emptyNewsForm;
    this.imagePreview = null;
    // this.liveFeeds = [];

    // reset file input
    if (this.imageInput) {
      this.imageInput.nativeElement.value = '';
    }

    // Clear rich text editor content
    if (this.newsDetailsEditor) {
      this.newsDetailsEditor.setContent('');
    }
  }
}
