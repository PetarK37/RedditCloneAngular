import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityRulesCardComponent } from './community-rules-card.component';

describe('CommunityRulesCardComponent', () => {
  let component: CommunityRulesCardComponent;
  let fixture: ComponentFixture<CommunityRulesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityRulesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityRulesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
