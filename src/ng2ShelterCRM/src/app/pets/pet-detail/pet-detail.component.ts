import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

//services
import { PetsRepository } from './../_services/pets.repository.service'

//models
import { Pet } from './../_models/pet.model';

@Component({
  selector: 'pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss'],
  providers: [PetsRepository]
})

export class PetDetailComponent implements OnInit {
  petId: string = null;
  pet: Pet;
  isComplete: boolean = false;

  constructor(private _route: ActivatedRoute,
              private _location: Location,
              private _repo: PetsRepository,
              private _router: Router) {
  }

  ngOnInit() {
    this._route.params.forEach((params) => {
      this.petId = params['id'];
    })

    this._repo.getSinglePet(this.petId)
                    .subscribe(data => this.pet = data,
                               error => console.log("error"),
                               () => this.isComplete = true);
  }

  goToUpdate() {
      this._router.navigate(['dashboard','pets', this.petId, 'update']);
  }

    setSexColor(pet) {
    let classes;
    if (pet.sex.toLowerCase() === "female") {
      classes = {
        'fa-stack': true,
        'female': true,
        'ml-auto': true
      }
    }
    if (pet.sex.toLowerCase() === "male") {
      classes = {
        'fa-stack': true,
        'male': true,
        'ml-auto': true
      }
    }
    return classes;
  }


  setSex(pet) {
    let classes;
    if (pet.sex.toLowerCase() === "female") {
      classes = {
        'fa': true,
        'fa-venus': true,
        'fa-stack-1x': true,
        'fa-inverse': true,
        'ml-auto': true
      }
    }
    if (pet.sex.toLowerCase() === "male") {
      classes = {
        'fa': true,
        'fa-mars': true,
        'fa-stack-1x': true,
        'fa-inverse': true,
        'ml-auto': true
      }
    }
    return classes;
  }

    deletePet(id: string) {
    this._repo.deletePet(id);
    this.goToAllPets();
  }

  goToAllPets() {
    this._router.navigate(['dashboard', 'pets']);
  };
}
