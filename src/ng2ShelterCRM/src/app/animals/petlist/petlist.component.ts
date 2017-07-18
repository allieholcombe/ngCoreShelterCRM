import { Component, OnInit } from '@angular/core';
import { PetsRepository } from './../../services/pets/pets.repository.service';

@Component({
  selector: 'pet-list',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.scss'],
  providers: [PetsRepository]
})
export class PetListComponent implements OnInit {

  constructor(private _repo: PetsRepository) { }

  ngOnInit() {
  }

  retrievePets() {
    var result = this._repo.getAllPets();
    console.log(result);
  }

}
