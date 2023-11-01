import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizByFormComponent } from './quiz-by-form.component';

describe('QuizByFormComponent', () => {
  let component: QuizByFormComponent;
  let fixture: ComponentFixture<QuizByFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizByFormComponent]
    });
    fixture = TestBed.createComponent(QuizByFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
