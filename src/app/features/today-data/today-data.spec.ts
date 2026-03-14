import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayData } from './today-data';

describe('TodayData', () => {
  let component: TodayData;
  let fixture: ComponentFixture<TodayData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
