import { ComponentFixture, TestBed } from '@angular/core/testing';

import { comparison } from './comparison.component';

describe('SideBySideComponent', () => {
  let component: comparison;
  let fixture: ComponentFixture<comparison>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [comparison],
    }).compileComponents();

    fixture = TestBed.createComponent(comparison);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
