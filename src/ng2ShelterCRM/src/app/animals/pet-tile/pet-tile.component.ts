import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Pet } from './../../models/pet.model';

@Component({
  selector: 'pet-tile',
  templateUrl: './pet-tile.component.html',
  styleUrls: ['./pet-tile.component.css']
})
export class PetTileComponent implements OnInit {
  @Input() pet: Pet;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  goToDetailPage(clickedPet: Pet) {
    this._router.navigate(['pets', clickedPet.id]);
  };

}
