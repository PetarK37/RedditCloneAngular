import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CretePostBarComponent } from './crete-post-bar.component';

describe('CretePostBarComponent', () => {
  let component: CretePostBarComponent;
  let fixture: ComponentFixture<CretePostBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CretePostBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CretePostBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
