import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFormsComponent } from './current-forms.component';

describe('CurrentFormsComponent', () => {
  let component: CurrentFormsComponent;
  let fixture: ComponentFixture<CurrentFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentFormsComponent]
    });
    fixture = TestBed.createComponent(CurrentFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
