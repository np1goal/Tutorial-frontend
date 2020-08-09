import { Component, OnInit, Inject } from '@angular/core';
import { element } from 'protractor';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-js-dom-tutorial',
  templateUrl: './js-dom-tutorial.component.html',
  styleUrls: ['./js-dom-tutorial.component.css', '../parent-styling/notes-styling.css']
})
export class JsDomTutorialComponent implements OnInit {
  
  constructor() {   }

  ngOnInit() {
  }

  elementId() {
    document.getElementById("elementByIdDocument").innerHTML = "The Id of this element is derived using document.getElementById(\"id\"). Changed the content of it using innerHTML. Changed the background-color style using style.property. Similarly it works for TagName and ClassName";
    document.getElementById("elementByIdDocument").style.backgroundColor = "aquamarine";
  }

  changeAlignment() {
    document.getElementById("setAttributeDocument").setAttribute("align", "left") ;
  }

  createElement() {
    
  }
}
