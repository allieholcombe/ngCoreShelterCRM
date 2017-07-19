import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  // name =  new FormControl("");

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "name": new FormControl("")
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
    console.log(this.form.value);
    // let newPet = new Pet(this.form.value);
  }
}
