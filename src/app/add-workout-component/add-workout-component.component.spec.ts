import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkoutComponentComponent } from './add-workout-component.component';

describe('AddWorkoutComponentComponent', () => {
  let component: AddWorkoutComponentComponent;
  let fixture: ComponentFixture<AddWorkoutComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWorkoutComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWorkoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
