import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitySearchResaultCardComponent } from './community-search-resault-card.component';

describe('CommunitySearchResaultCardComponent', () => {
  let component: CommunitySearchResaultCardComponent;
  let fixture: ComponentFixture<CommunitySearchResaultCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunitySearchResaultCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitySearchResaultCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
