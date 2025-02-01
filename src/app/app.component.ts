import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkoutTableviewComponentComponent } from "./workout-tableview-component/workout-tableview-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WorkoutTableviewComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fitness-tracker-app';
}
