import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModeratorWindowComponent } from './add-moderator-window.component';

describe('AddModeratorWindowComponent', () => {
  let component: AddModeratorWindowComponent;
  let fixture: ComponentFixture<AddModeratorWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModeratorWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModeratorWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
