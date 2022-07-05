import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitySettingsModWindowComponent } from './community-settings-mod-window.component';

describe('CommunitySettingsModWindowComponent', () => {
  let component: CommunitySettingsModWindowComponent;
  let fixture: ComponentFixture<CommunitySettingsModWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunitySettingsModWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitySettingsModWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
