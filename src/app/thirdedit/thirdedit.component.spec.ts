import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdeditComponent } from './thirdedit.component';

describe('ThirdeditComponent', () => {
  let component: ThirdeditComponent;
  let fixture: ComponentFixture<ThirdeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
