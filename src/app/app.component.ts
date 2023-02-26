import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //onTerm method, it will be called with a string, the same term the user inputs on the search input and its passed from child component (search-bar component)
  onTerm(term: string){

  }
}
