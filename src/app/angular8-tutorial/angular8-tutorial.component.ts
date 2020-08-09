import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular8-tutorial',
  templateUrl: './angular8-tutorial.component.html',
  styleUrls: ['./angular8-tutorial.component.css', '../parent-styling/notes-styling.css']
})
export class Angular8TutorialComponent implements OnInit {

  title = "Angular 8 tutorial"
  myInputValue = "dummy value";
  objectToJson = {
    "SalaryData" : {
      'Nishtha': 90000,
      'Aditi': 900000
      }
  };
  today: number = Date.now();
  public userTypedValue = "";
  greetings = "";
  hrefForPropertyBinding = "https://www.w3schools.com/";

  constructor() { 
  }

  ngOnInit() {
  }

  greetUser(): String{
    return "Hello user";
  }

  usersInputMessage(userInput: string) {
    alert("User says... " + userInput);
  }

  usersInputRange(userInputRange: number) {
    alert("User's range... " + userInputRange);
  }

  usersInputPassword(userInputPassword: string) {
    alert("User's password... " + userInputPassword);
  }

  greetingUser() {
    this.greetings = "Hello User! Have a nice day";
  }

  unGreetingUser() {
    this.greetings = "";
  }

}
