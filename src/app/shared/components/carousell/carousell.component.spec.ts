import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousellComponent } from './carousell.component';

describe('CarrousellComponent', () => {
  let component: CarousellComponent;
  let fixture: ComponentFixture<CarousellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarousellComponent]
    });
    fixture = TestBed.createComponent(CarousellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
