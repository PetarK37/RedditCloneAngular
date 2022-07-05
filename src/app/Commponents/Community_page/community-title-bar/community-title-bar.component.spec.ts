import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityTitleBarComponent } from './community-title-bar.component';

describe('CommunityTitleBarComponent', () => {
  let component: CommunityTitleBarComponent;
  let fixture: ComponentFixture<CommunityTitleBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityTitleBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityTitleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
