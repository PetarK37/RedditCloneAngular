import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCommunityCardComponent } from './about-community-card.component';

describe('AboutCommunityCardComponent', () => {
  let component: AboutCommunityCardComponent;
  let fixture: ComponentFixture<AboutCommunityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCommunityCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCommunityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
