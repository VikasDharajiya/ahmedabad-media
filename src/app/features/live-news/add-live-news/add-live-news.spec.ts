import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLiveNews } from './add-live-news';

describe('AddLiveNews', () => {
  let component: AddLiveNews;
  let fixture: ComponentFixture<AddLiveNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLiveNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLiveNews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
