import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostKarmaRowComponent } from './psot-karma-row.component';

describe('PsotKarmaRowComponent', () => {
  let component: PostKarmaRowComponent;
  let fixture: ComponentFixture<PostKarmaRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostKarmaRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostKarmaRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
