import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutTableviewComponentComponent } from './workout-tableview-component.component';

describe('WorkoutTableviewComponentComponent', () => {
  let component: WorkoutTableviewComponentComponent;
  let fixture: ComponentFixture<WorkoutTableviewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutTableviewComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutTableviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
