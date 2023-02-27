import { Injectable } from '@angular/core';
//import httpClient (a class) to allow us to make the http request
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  //dependency injection
  constructor(private http:HttpClient){}

  //method called search, whenever the method gets called we pass in the search term. This search term comes from the app component because the app component is receiving this term inside of the onTerm method.
  //Inside of search we write the logic to reach out to the wikipedia API and make that request
  public search(term: string){
   //code to make the request
   //we access the http we just requested and on there we add the get(), the first method is the url to the api we want to make the request to, the second argument will be an object, inside a params key, any key value pair we add here are going to be automatically turn into a query string and added on to the very end of the url
   return this.http.get('https://en.wikipedia.org/w/api.php', {
    params: {
      //this parameters are what the wikipedia api demands
      action: 'query',
      format: 'json',
      list: 'search',
      utf8: '1',
      srsearch: term,
      origin: '*'
    }
   });
  }

  
}

//SERVICES:
//Used to fetch/store/update any kind of data in our app
//always implemented as classes
//Angular will automatically create a single instance of each service
