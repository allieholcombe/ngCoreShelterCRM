import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

//Services
import { PetsRepository } from './../../services/pets/pets.repository.service';

@Component({
  selector: 'delete-pet',
  templateUrl: './delete-pet.component.html',
  styleUrls: ['./delete-pet.component.css'],
  providers: [PetsRepository]
})
export class DeletePetComponent implements OnInit {

  constructor(private _repo: PetsRepository) { }

  ngOnInit() {
  }

  onSubmit(id: string) {
    console.log(id);
    this._repo.deletePet(id);
  }

}
