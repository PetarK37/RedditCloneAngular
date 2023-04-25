import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInputModalComponent } from './add-input-modal.component';

describe('AddInputModalComponent', () => {
  let component: AddInputModalComponent;
  let fixture: ComponentFixture<AddInputModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInputModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInputModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
