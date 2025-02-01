import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddWorkoutComponentComponent } from "../add-workout-component/add-workout-component.component";
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-workout-tableview-component',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, CommonModule, AddWorkoutComponentComponent, MatSelectModule],
  templateUrl: './workout-tableview-component.component.html',
  styleUrl: './workout-tableview-component.component.css'
})
export class WorkoutTableviewComponentComponent {
  displayedColumns: string[] = ['name', 'workouts', "no_of_workouts", "workout_time"];
  userData = [
    {
      id: 1,
      name: 'John Doe',
      workouts: [
        { type: 'Running', minutes: 30 },
        { type: 'Cycling', minutes: 45 }
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      workouts: [
        { type: 'Swimming', minutes: 60 },
        { type: 'Running', minutes: 20 }
      ]
    },
    {
      id: 3,
      name: 'Mike Johnson',
      workouts: [
        { type: 'Yoga', minutes: 50 },
        { type: 'Cycling', minutes: 40 }
      ]
    },
  ];
  users = [...this.userData];
  isModalOpen: boolean = false;


  workoutService;
  message;
  datasource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
      this.userData = this.users;
      this.datasource = new MatTableDataSource(this.users);
    }else{
      localStorage.setItem('users', JSON.stringify(this.users)); 
      this.datasource = new MatTableDataSource(this.users);
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  addWorkout(userWorkout: any) {
    const existingUserIndex = this.users.findIndex(u => u.name === userWorkout.name);

    if (existingUserIndex !== -1) {
      let existingUser = this.users[existingUserIndex];
      existingUser.workouts.push({ type: userWorkout.workoutType, minutes: userWorkout.workoutTime})
      this.users[existingUserIndex] = existingUser;
    } else {
      
      this.users.push({
        id: this.users.length + 1,
        name: userWorkout.name,
        workouts: [
          { type: userWorkout.workoutType, minutes: userWorkout.workoutTime },
        ]
      });
    }
    localStorage.setItem('users', JSON.stringify(this.users)); 
    this.fetchUsers();
    this.datasource.paginator = this.paginator;
  }


  applySearch(event:Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

    this.users = this.userData.filter(user =>
      user.name.toLowerCase().includes(filterValue) ||
      user.workouts.some(workout =>
        workout.type.toLowerCase().includes(filterValue)
      )
    );
    this.datasource = new MatTableDataSource(this.users);
    this.datasource.paginator = this.paginator;
  }

  applyFilter(filterValue) {
    
    if (filterValue === '') {
      this.users = this.userData; 
      this.datasource = new MatTableDataSource(this.users);
    } else {
      this.users = this.users.filter(user => user.workouts.some(workout => workout.type === filterValue));
      this.datasource = new MatTableDataSource(this.users);
    }
    this.datasource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
  }

  calculateTime(workouts){
    return workouts.reduce((sum, workout) => sum + (workout.minutes || 0), 0);
  }
}


