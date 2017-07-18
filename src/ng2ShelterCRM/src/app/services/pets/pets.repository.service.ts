import { Injectable, Inject } from '@angular/core';

//Services
import { PetsDataAccess } from './pets.data.service';
// import { PetsTransform } from './pets.transform.service'; 

// Models
import { Pet } from './../../models/pet.model';


@Injectable()
export class PetsRepository {
    constructor(
        @Inject(PetsDataAccess) public _dataAccess: PetsDataAccess
        // @Inject(PetsTransform) private _transform: PetsTransform
    ) { }

    getAllPets() {
        let allPets = this._dataAccess.getAllPets();
        // allPets = this._transform.transformPets(allPets);
        return allPets;
    }

    getSinglePet(id: string) {

    }

}