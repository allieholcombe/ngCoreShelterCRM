import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

//Services
import { PetsRepository } from './../../services/pets/pets.repository.service';
import { PetsTransform } from './../../services/pets/pets.transform.service';
import { PetsDataAccess } from './../../services/pets/pets.data.service';

//Models
import { Pet } from './../../models/pet.model';

@Component({
  selector: 'update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.scss']
})
export class UpdatePetComponent implements OnInit {
  form: FormGroup;
  currentPet: Pet = new Pet();

  constructor(fb: FormBuilder,
              private _transform: PetsTransform,
              private _data: PetsDataAccess) {
    this.form = fb.group({
      "name": new FormControl(""),
      "id": null,
      "sex": new FormControl("")
    })
  }

  ngOnInit() {
  }

  //trying to take form controls and apply them to pet model
  onSubmit() {
    //figure out better structure using repository later?
    this.currentPet = this._transform.formCreatePet(this.form, this.currentPet);
    this._data.addPet(this.currentPet)
      .subscribe(data => console.log(data));
  }
}
