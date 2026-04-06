import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Dialog } from '@shared/components/dialog/dialog';

@Component({
  selector: 'app-thumbnail-dialog',
  standalone: true,
  imports: [CommonModule, Dialog, ReactiveFormsModule],
  templateUrl: './thumbnail-dialog.html',
})
export class ThumbnailDialog {
  private fb = inject(FormBuilder);

  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<{ title: string; description: string; image: File | null }>();

  thumbnailForm: FormGroup = this.fb.group({
    title: [''],
    description: [''],
    image: [null],
  });

  imagePreview: string | null = null;

  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    const file = input.files[0];
    if (this.imagePreview) URL.revokeObjectURL(this.imagePreview);
    this.thumbnailForm.patchValue({ image: file });
    this.imagePreview = URL.createObjectURL(file);
  }

  removeImage() {
    if (this.imagePreview) URL.revokeObjectURL(this.imagePreview);
    this.thumbnailForm.patchValue({ image: null });
    this.imagePreview = null;
  }

  onSave() {
    this.save.emit(this.thumbnailForm.value);
    this.reset();
  }

  onCancel() {
    this.reset();
  }

  private reset() {
    this.thumbnailForm.reset();
    this.removeImage();
    this.visible = false;
    this.visibleChange.emit(false);
  }
}
