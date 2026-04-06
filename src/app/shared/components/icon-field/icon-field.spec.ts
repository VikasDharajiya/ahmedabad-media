import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconField } from './icon-field';

describe('IconField', () => {
  let component: IconField;
  let fixture: ComponentFixture<IconField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconField]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconField);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
