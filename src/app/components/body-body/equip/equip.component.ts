import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EquipService } from './equip.service';

@Component({
  selector: 'app-equip',
  templateUrl: './equip.component.html',
  styleUrls: ['./equip.component.css']
})
export class EquipComponent implements OnInit {

  equipItem:any[] = [];


  constructor(
    private route:ActivatedRoute,
    private __service:EquipService
  ) {
    this.route.params.subscribe(params=>{
      console.log(params['id'])
      this.equipItem = this.__service.addOne(params['id'])
    })
   }

  ngOnInit(): void {
  }

}
