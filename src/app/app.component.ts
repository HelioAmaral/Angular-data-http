import { Component } from '@angular/core';
//import the wikipedia service because we need onTerm to call the search method inside of wikipedia service
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//pages property will store the result we get from the http request. This property is the property that will be communicated to the page-list component to show the results from the request
  pages = [];



  //the constructor gets called automatically whenever an instance of AppComponent is created
  //this constructor is saying that whenever an instance of AppComponent is created is going to receive a single argument called wikipedia and it will be of type WikipediaService, this is a class, when we use a class as a type annotation, that means that whatever we are applying the annotation to must be an instance of that class. We are syimg here that the wikipedia argument must be an instance of Wikipedia service
  //private wikipedia says that AppComponent or an instance of it is going to have a wikipedia property, which we can access with this.wikipedia
  constructor(private wikipedia: WikipediaService){

  }

  //onTerm method, it will be called with a string, the same term the user inputs on the search input and its passed from child component (search-bar component)
  onTerm(term: string){
    this.wikipedia.search(term).subscribe((response: any) => {
      //we update the pages property
      this.pages = response.query.search;
    })
  }
}
