import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveModeratorWindowComponent } from './remove-moderator-window.component';

describe('RemoveModeratorWindowComponent', () => {
  let component: RemoveModeratorWindowComponent;
  let fixture: ComponentFixture<RemoveModeratorWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveModeratorWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveModeratorWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
