import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

//Services
import { PetsRepository } from './../_services/pets.repository.service';

@Component({
  selector: 'delete-pet',
  templateUrl: './delete-pet.component.html',
  styleUrls: ['./delete-pet.component.css'],
  providers: [PetsRepository]
})

export class DeletePetComponent implements OnInit {
  @Input() petId: string;

  constructor(private _repo: PetsRepository,
              private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(id: string) {
    console.log(id);
    this._repo.deletePet(id);
    this.goToAllPets();
  }

  goToAllPets() {
    this._router.navigate(['dashboard', 'pets']);
  };

}
