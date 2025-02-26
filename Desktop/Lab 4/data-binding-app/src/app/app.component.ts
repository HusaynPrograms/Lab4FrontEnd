import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Import components
import { ListComponent  } from './list/list.component';

@Component({
  selector: 'app-root',
  // Importing external component
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count: number = 0; // Track Button Clicks
  title = 'data-binding-app'; // App title
  show:boolean = true; 

//Increase count when button is clicked
  onButtonClick(){
    this.count++
  }

  // Change star visibility when double clicked
  onStarDoubleClicked(){
    if (this.show)
 {
  this.show = false;
 }   else {
  this.show = true;
 }
  }
}


