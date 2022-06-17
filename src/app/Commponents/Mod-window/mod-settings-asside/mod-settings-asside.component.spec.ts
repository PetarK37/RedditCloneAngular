import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModSettingsAssideComponent } from './mod-settings-asside.component';

describe('ModSettingsAssideComponent', () => {
  let component: ModSettingsAssideComponent;
  let fixture: ComponentFixture<ModSettingsAssideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModSettingsAssideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModSettingsAssideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
