import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingsComponent } from './checkings.component';

describe('CheckingsComponent', () => {
  let component: CheckingsComponent;
  let fixture: ComponentFixture<CheckingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
