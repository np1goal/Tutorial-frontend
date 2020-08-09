import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  switchToList() {
      if (document.getElementById("notes-quiz-option").style.display == "" || document.getElementById("notes-quiz-option").style.display == "grid") {
          document.getElementById('notes-quiz-option').style.display = 'none';
          document.getElementById('notes-list').style.display = 'grid';
          document.getElementById('back-button').style.visibility = 'visible';
      }
  }

  switchToOptions() {
      if (document.getElementById("notes-quiz-option").style.display == "none") {
          document.getElementById('notes-quiz-option').style.display = 'grid';
          document.getElementById('notes-list').style.display = 'none';
          document.getElementById('back-button').style.visibility = 'hidden';
      }
  }
 
}
