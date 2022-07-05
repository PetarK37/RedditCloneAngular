import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityReportsWindowComponent } from './community-reports-window.component';

describe('CommunityReportsWindowComponent', () => {
  let component: CommunityReportsWindowComponent;
  let fixture: ComponentFixture<CommunityReportsWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityReportsWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityReportsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
