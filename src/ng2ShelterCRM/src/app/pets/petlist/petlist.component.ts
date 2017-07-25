import { Component, OnInit } from '@angular/core';

//Services
import { PetsRepository } from './../_services/pets.repository.service';
import { AuthService } from './../../_services/auth.service';

//Models
import { Pet } from './../_models/pet.model';

@Component({
  selector: 'pet-list',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.scss'],
  providers: [
    PetsRepository,
    AuthService
  ]
})
export class PetListComponent implements OnInit {
  result: any;
  isComplete: boolean = false;
  isMultiple: boolean = false;

  constructor(
    private _repo: PetsRepository,
    private _auth: AuthService
  ) { }

  ngOnInit() {
    this.retrievePets();
  }

  //NEXT STEP: FORM VALIDATION
  //json returns this with extra array, not sure why
  retrievePets() {
    this.result = null;
    this.isComplete = false;
    this._repo.getAllPets()
      .subscribe((data: Response) => this.result = data,
      (error: any) => console.log("You borked it"),
      () => {
        this.isComplete = true;
        this.isMultiple = true;
        console.log(this.result);
      });
  }


  retrieveSinglePet(id: string) {
    this.isMultiple = false;
    this.isComplete = false;
    this._repo.getSinglePet(id)
      .subscribe((data: Response) => this.result = data,
      (error: any) => console.log("You borked it"),
      () => this.isComplete = true);
  }

  logOut() {
    this._auth.logOut();
  }
}
