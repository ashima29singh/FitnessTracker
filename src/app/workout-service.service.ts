import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutServiceService {

  constructor() { }

  getMessage() {
    return "Hello from MyService!";
  }

  getUsersWorkout(){
   return localStorage.getItem('users')
  }

  addUsersWorkout(name, workoutType, workoutTime){
    console.log(name, workoutType, workoutTime)
  }
}
