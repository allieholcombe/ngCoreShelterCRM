import { Component, OnInit } from '@angular/core';

//Services
import { PetsRepository } from './../../services/pets/pets.repository.service';

//Models
import { Pet } from './../../models/pet.model';

@Component({
  selector: 'pet-list',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.scss'],
  providers: [PetsRepository]
})
export class PetListComponent implements OnInit {
  result: any;
  isComplete: boolean = false;
  isMultiple: boolean = false;

  constructor(private _repo: PetsRepository) { }

  ngOnInit() {
  }

  //NEXT STEP: FORM VALIDATION
  //json returns this with extra array, not sure why
  retrievePets() {
    this.isComplete = false;
    this._repo.getAllPets()
      .subscribe((data: Response) => this.result = data,
      (error: any) => console.log("You borked it"),
      () => {
        this.isComplete = true;
        this.isMultiple = true;
      });
  }

  retrieveSinglePet(id: string) {
    this.isMultiple = false;
    this.isComplete = false;
    this._repo.getSinglePet(id)
      .subscribe((data: Response) => this.result = data,
      (error: any) => console.log("You borked it"),
      () => this.isComplete = true);
  }
}
