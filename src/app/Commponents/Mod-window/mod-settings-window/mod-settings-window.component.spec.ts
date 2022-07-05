import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModSettingsWindowComponent } from './mod-settings-window.component';

describe('ModSettingsWindowComponent', () => {
  let component: ModSettingsWindowComponent;
  let fixture: ComponentFixture<ModSettingsWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModSettingsWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModSettingsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
