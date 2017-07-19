import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

//Services
import { PetsRepository } from './../../services/pets/pets.repository.service';

//Models
import { Pet } from './../../models/pet.model';

@Component({
  selector: 'add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})

export class AddPetComponent implements OnInit {
  form: FormGroup;
  newPet: Pet = new Pet();

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "name": new FormControl(""),
      "id": null
    })
  }

  ngOnInit() {
  }

  //trying to take form controls and apply them to pet model
  onSubmit() {
    this.newPet.name = this.form.get('name').value;
  }
}
