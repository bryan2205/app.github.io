import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipService {

  equip:any[] = [
    {
    nome: 'Bryan',
    special: 'Angular',
    description: 'Lorem A ipsum dolor sit amet, consectetur adipisicing elit. Ullam, illum modi odio in tenetur voluptatum ab. Temporibus, expedita. Maxime eaque, enim veritatis labore quos porro molestias odio ullam iusto cum!'
    },
    {
      nome: 'Gaia',
      special: 'HTML',
      description: 'Lorem H ipsum dolor sit amet, consectetur adipisicing elit. Ullam, illum modi odio in tenetur voluptatum ab. Temporibus, expedita. Maxime eaque, enim veritatis labore quos porro molestias odio ullam iusto cum!'
    },
    {
      nome: 'Ohana',
      special: 'Bolidaaaazzo',
      description: 'Lorem B ipsum dolor sit amet, consectetur adipisicing elit. Ullam, illum modi odio in tenetur voluptatum ab. Temporibus, expedita. Maxime eaque, enim veritatis labore quos porro molestias odio ullam iusto cum!'
    }

]

  constructor() {
    console.log("siamo in Service!")
  }
  addEquip(){
    return  this.equip;
  }
  addOne(i){
    return this.equip[i];
  }
}
