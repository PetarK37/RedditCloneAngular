import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageAssideComponent } from './main-page-asside.component';

describe('MainPageAssideComponent', () => {
  let component: MainPageAssideComponent;
  let fixture: ComponentFixture<MainPageAssideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageAssideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageAssideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
