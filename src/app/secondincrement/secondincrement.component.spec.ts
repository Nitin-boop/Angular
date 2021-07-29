import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondincrementComponent } from './secondincrement.component';

describe('SecondincrementComponent', () => {
  let component: SecondincrementComponent;
  let fixture: ComponentFixture<SecondincrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondincrementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondincrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
