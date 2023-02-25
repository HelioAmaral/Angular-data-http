import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
//the term the user types in the search bar, set to empty string, any type the user changes that input, we will take the value of that input and use it to update the property term 
  term = '';

  //on the callback method onInput we take the value as a parameter and we use it to update the term property
  /*
  onInput(value: string){
    this.term = value; 
  }*/

}
