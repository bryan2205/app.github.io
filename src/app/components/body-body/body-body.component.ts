import { Component, OnInit } from '@angular/core';
import { EquipService } from './equip/equip.service'

@Component({
  selector: 'app-body-body',
  templateUrl: './body-body.component.html',
  styleUrls: ['./body-body.component.css']
})
export class BodyBodyComponent implements OnInit {

  equip:any[] = [];

  constructor(private _service:EquipService) {
    this.equip = _service.addEquip();
   }

  ngOnInit(): void {
  }

}
