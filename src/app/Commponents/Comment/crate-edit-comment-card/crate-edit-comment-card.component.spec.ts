import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateEditCommentCardComponent } from './crate-edit-comment-card.component';

describe('CrateEditCommentCardComponent', () => {
  let component: CrateEditCommentCardComponent;
  let fixture: ComponentFixture<CrateEditCommentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrateEditCommentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrateEditCommentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
