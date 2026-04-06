import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailDialog } from './thumbnail-dialog';

describe('ThumbnailDialog', () => {
  let component: ThumbnailDialog;
  let fixture: ComponentFixture<ThumbnailDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThumbnailDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThumbnailDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
