import { Component, Input } from '@angular/core';

import { Link } from './link.model'
@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {

  @Input() link:Link;

  constructor() { }


}
