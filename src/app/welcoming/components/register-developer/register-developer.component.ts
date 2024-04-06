import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register-developer',
  templateUrl: './register-developer.component.html',
  styleUrl: './register-developer.component.css'
})
export class RegisterDeveloperComponent {
  developerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  @Output() developerRegistered = new EventEmitter<{ firstName: string, lastName: string}>();

  onSubmit() {
    let firstName = this.developerForm.value.firstName != null?this.developerForm.value.firstName.toString():'Unknown';
    let lastName = this.developerForm.value.lastName != null?this.developerForm.value.lastName.toString():'Unknown';
    this.developerRegistered.emit({firstName, lastName});
  }
}
