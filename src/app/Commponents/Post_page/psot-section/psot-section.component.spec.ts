import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSectionComponent } from './psot-section.component';

describe('PsotSectionComponent', () => {
  let component: PostSectionComponent;
  let fixture: ComponentFixture<PostSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
