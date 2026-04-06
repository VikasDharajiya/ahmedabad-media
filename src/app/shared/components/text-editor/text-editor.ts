import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-editor.html',
})
export class TextEditor {
  /** Optional label shown above the toolbar */
  @Input() label = '';

  /** Placeholder text for the editable area */
  @Input() placeholder = 'Enter details here...';

  /**
   * Tailwind min-height class for the editable area.
   * e.g. 'min-h-96' (main form) or 'min-h-52' (dialog)
   */
  @Input() minHeightClass = 'min-h-52';

  /** Emits the inner HTML whenever the user types */
  @Output() contentChange = new EventEmitter<string>();

  @ViewChild('editor') editorRef!: ElementRef<HTMLDivElement>;

  // ── Toolbar actions ───────────────────────────────────────────────────────

  fmt(command: string, value?: string): void {
    document.execCommand(command, false, value);
    this.editorRef.nativeElement.focus();
  }

  insertLink(): void {
    const url = prompt('Enter URL:');
    if (url) document.execCommand('createLink', false, url);
  }

  insertImage(): void {
    const url = prompt('Enter image URL:');
    if (url) document.execCommand('insertImage', false, url);
  }

  // ── Value ─────────────────────────────────────────────────────────────────

  onInput(): void {
    this.contentChange.emit(this.editorRef.nativeElement.innerHTML);
  }

  /** Programmatically get current HTML content */
  getContent(): string {
    return this.editorRef?.nativeElement.innerHTML ?? '';
  }

  /** Programmatically set HTML content */
  setContent(html: string): void {
    if (this.editorRef) {
      this.editorRef.nativeElement.innerHTML = html;
    }
  }
}
