import { Component } from '@angular/core';

import { Link } from './Link/link/link.model';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent { 
    
links:Link[]

constructor(){
  this.links = [
    new Link('Angular', 'http://angulario', 100),
    new Link('Youtube', 'http://youtube.com', 50),
  ]
}


  addLink(title:HTMLInputElement, link:HTMLInputElement){
    this.links.push(new Link(title.value, link.value))

    title.value = "";
    link.value = "";
  }


}
