import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions = ['Basic', 'Intermediate', 'Advanced'];
  selectedSubscription = 'Advanced';

  @ViewChild('signUpForm') signForm: NgForm;
  onSubmit() {
    console.log(this.signForm.value);
  }

}
