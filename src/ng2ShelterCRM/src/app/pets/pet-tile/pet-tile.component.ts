import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Pet } from './../_models/pet.model';

@Component({
  selector: 'pet-tile',
  templateUrl: './pet-tile.component.html',
  styleUrls: ['./pet-tile.component.scss']
})
export class PetTileComponent implements OnInit {
  @Input() pet: Pet;
  sexClasses = "fa fa-male";

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  goToDetailPage(clickedPet: Pet) {
    this._router.navigate(['dashboard', 'pets', clickedPet.id]);
  };

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
}
