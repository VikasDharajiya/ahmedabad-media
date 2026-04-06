import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveFeedDialog } from './live-feed-dialog';

describe('LiveFeedDialog', () => {
  let component: LiveFeedDialog;
  let fixture: ComponentFixture<LiveFeedDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveFeedDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveFeedDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
