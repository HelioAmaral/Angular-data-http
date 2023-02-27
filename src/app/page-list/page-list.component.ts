import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  //the input decorator tells angular that the property we're going to list out is going to be provided from the parent component (AppComponent) - this property names referes to the property name decided in the AppComponent ([pages]) 
  @Input() pages: any = [];
}
