import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

//Services
import { PetsRepository } from './../_services/pets.repository.service';
import { PetsTransform } from './../_services/pets.transform.service';
import { PetsDataAccess } from './../_services/pets.data.service';

//Models
import { Pet } from './../_models/pet.model';

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
      "id": null,
      "sex": new FormControl("")
    })
  }

  ngOnInit() {
  }

  //trying to take form controls and apply them to pet model
  onSubmit() {
    //figure out better structure using repository later?
    this.newPet = this._transform.formCreatePet(this.form, this.newPet);
    this._data.addPet(this.newPet)
      .subscribe(data => data);
  }
}
