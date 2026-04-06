import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodayData } from './add-today-data';

describe('AddTodayData', () => {
  let component: AddTodayData;
  let fixture: ComponentFixture<AddTodayData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTodayData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTodayData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
