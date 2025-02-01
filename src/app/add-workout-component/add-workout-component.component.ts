import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-workout-component',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-workout-component.component.html',
  styleUrl: './add-workout-component.component.css'
})
export class AddWorkoutComponentComponent {
  @Input() isOpen: boolean = false;
  @Output() userAdded = new EventEmitter<any>();;

  formData = {
    name: '',
    workoutType: '',
    workoutTime: ''
  };

  workoutTypes= ['Running', 'Cycling', 'Yoga']
  closeModal() {
    this.isOpen = false;
  }

  submitForm() {
    // Handle form submission
    console.log('Form Data:', this.formData);
    if (this.formData.name && this.formData.workoutTime && this.formData.workoutType) {
      this.userAdded.emit(this.formData); // Send user data to parent
      this.formData = { name: '', workoutTime: '', workoutType: null }; 
      this.closeModal();
    }
    this.closeModal(); // Close the modal after submission
  }
}
