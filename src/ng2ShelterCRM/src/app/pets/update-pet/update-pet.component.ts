import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Rx';

//Services
import { PetsRepository } from './../_services/pets.repository.service';
import { PetsTransform } from './../_services/pets.transform.service';
import { PetsDataAccess } from './../_services/pets.data.service';

//Models
import { Pet } from './../_models/pet.model';

@Component({
  selector: 'update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.scss'],
    providers: [PetsRepository]
})

export class UpdatePetComponent implements OnInit {
  form: FormGroup;
  currentPet: Pet;
  petId: string = null;
  isComplete: boolean = false;

  constructor(fb: FormBuilder,
              private _transform: PetsTransform,
              private _data: PetsDataAccess,
              private _route: ActivatedRoute,
              private _location: Location,
              private _repo: PetsRepository) {
    this.form = fb.group({
      "name": new FormControl(""),
      "id": null,
      "sex": new FormControl("")
    });
  }

  ngOnInit() {
    this._route.params.forEach((params) => {
      this.petId = params['id'];
    });

    this._repo.getSinglePet(this.petId)
                    .subscribe(data => this.currentPet = data,
                               error => console.log("error"),
                               () => {this.isComplete = true;
                                      this.setUpForm();
                                     });
    
  }

  //trying to take form controls and apply them to pet model
  onSubmit() {
    //figure out better structure using repository later?
    this.currentPet = this._transform.formCreatePet(this.form, this.currentPet);
    this._data.updatePet(this.currentPet)
      .subscribe(data => console.log(data));
  }

  setUpForm() {
    this.form.controls['name'].setValue(this.currentPet.name);
    this.form.controls['sex'].setValue(this.currentPet.sex);
  }
}
