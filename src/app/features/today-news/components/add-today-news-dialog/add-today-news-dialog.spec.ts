import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodayNewsDialog } from './add-today-news-dialog';

describe('AddTodayNewsDialog', () => {
  let component: AddTodayNewsDialog;
  let fixture: ComponentFixture<AddTodayNewsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTodayNewsDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTodayNewsDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
