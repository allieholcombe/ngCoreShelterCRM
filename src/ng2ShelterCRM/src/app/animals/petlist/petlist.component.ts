import { Component, OnInit } from '@angular/core';
import { PetsRepository } from './../../services/pets/pets.repository.service';

@Component({
  selector: 'pet-list',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.scss'],
  providers: [PetsRepository]
})
export class PetListComponent implements OnInit {
  result: any;
  isComplete: boolean = false;

  constructor(private _repo: PetsRepository) { }

  ngOnInit() {
  }

  //json returns this with extra array, not sure why
  retrievePets() {
    this.isComplete = false;
    this._repo.getAllPets()
      .subscribe((data: Response) => this.result = data,
                 (error: any) => console.log("You borked it"),
                 () => this.isComplete = true);
  }

  retrieveSinglePet(id: string) {
    this._repo.getSinglePet(id);
    console.log(this.result);
  }

}
