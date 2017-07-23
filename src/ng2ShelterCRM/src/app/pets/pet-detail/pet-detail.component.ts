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
      this._router.navigate(['pets', this.petId, 'update']);
  }

}
