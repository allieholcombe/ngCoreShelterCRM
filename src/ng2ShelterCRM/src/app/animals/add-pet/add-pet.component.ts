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
  selector: 'add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss'],
  providers: [PetsTransform]
})

export class AddPetComponent implements OnInit {
  form: FormGroup;
  newPet: Pet = new Pet();

  constructor(fb: FormBuilder,
              private _transform: PetsTransform,
              private _data: PetsDataAccess) {
    this.form = fb.group({
      "name": new FormControl(""),
      "id": null
    })
  }

  ngOnInit() {
  }

  //trying to take form controls and apply them to pet model
  onSubmit() {
    console.log("Submitted");
    //figure out better structure using repository later?
    this.newPet.name = this._transform.formCreatePet(this.form);
    console.log("newPet:");
    console.log(this.newPet);
    this._data.addPet(this.newPet)
      .subscribe(data => console.log(data));
  }
}