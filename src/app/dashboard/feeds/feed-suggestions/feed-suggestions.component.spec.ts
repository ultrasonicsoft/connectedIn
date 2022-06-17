import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedSuggestionsComponent } from './feed-suggestions.component';

describe('FeedSuggestionsComponent', () => {
  let component: FeedSuggestionsComponent;
  let fixture: ComponentFixture<FeedSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FeedSuggestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
