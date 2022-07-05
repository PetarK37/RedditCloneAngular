import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitySettingsWindowComponent } from './community-settings-window.component';

describe('CommunitySettingsWindowComponent', () => {
  let component: CommunitySettingsWindowComponent;
  let fixture: ComponentFixture<CommunitySettingsWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunitySettingsWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitySettingsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
