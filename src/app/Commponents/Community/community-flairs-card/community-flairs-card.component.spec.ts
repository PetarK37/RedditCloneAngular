import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityFlairsCardComponent } from './community-flairs-card.component';

describe('CommunityFlairsCardComponent', () => {
  let component: CommunityFlairsCardComponent;
  let fixture: ComponentFixture<CommunityFlairsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityFlairsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityFlairsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
