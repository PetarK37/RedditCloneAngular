import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentKarmaRowComponent } from './comment-karma-row.component';

describe('CommentKarmaRowComponent', () => {
  let component: CommentKarmaRowComponent;
  let fixture: ComponentFixture<CommentKarmaRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentKarmaRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentKarmaRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
