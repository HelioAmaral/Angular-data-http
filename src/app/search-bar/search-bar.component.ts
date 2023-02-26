//To do child to parent communication we need to import EventEmitter and Output
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
//to communicate data from the search bar to the app component (parent component) we make use of the @Output() decorator
//this means we use the Output decorator with the property name submited and we set a new EventEmmitter of type string, meaning we are going to emit or send out some information that is a string. The submitted property is an instance of the EventEmitter, we can use this to trigger events that get sent back up to the parent component
@Output() submitted = new EventEmitter<string>()




//the term the user types in the search bar, set to empty string, any type the user changes that input, we will take the value of that input and use it to update the property term 
  term = '';

  //on the callback method onInput we take the value as a parameter and we use it to update the term property
  /*
  onInput(value: string){
    this.term = value; 
  }*/

  onFormSubmit(event: any) {
event.preventDefault();
//we use the submitted property here with the information we want to put out
this.submitted.emit(this.term);
  }

}
