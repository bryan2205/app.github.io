import { Component } from '@angular/core';
import { DogBreed } from './models/dog-breed'

@Component({
  selector: 'simple-crud',
  templateUrl: './simple-crud.component.html',
  styleUrls: ['./simple-crud.component.css']
})
export class SimpleCrudComponent {

  dogBreedArray: DogBreed[] = [
    {id: 1, name:"Ryan", typeAnimal:"Cane" ,breed:"Meticcio"},
    {id: 2, name:"Wendy", typeAnimal:"Gatto" ,breed:"Ipoallergenica"},
    {id: 3, name:"Ohana", typeAnimal:"Cane" ,breed:"Meticcio"}
  ]

  selectedDog: DogBreed = new DogBreed();
  
  addOrEdit(){
    if(this.selectedDog.id === 0){
      this.selectedDog.id = this.dogBreedArray.length + 1;
    this.dogBreedArray.push(this.selectedDog)
    }


    this.selectedDog = new DogBreed();
  }

  openForEdit(dogBreed: DogBreed){
    this.selectedDog = dogBreed;
  }
  
  delete(){
    if(confirm('Are you sure you want to delete it?')){
      this.dogBreedArray = this.dogBreedArray.filter(x => x != this.selectedDog);
    this.selectedDog = new DogBreed();
    }
  }

  constructor() { }


}
