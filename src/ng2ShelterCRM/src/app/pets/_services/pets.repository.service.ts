import { Injectable, Inject } from '@angular/core';
import 'rxjs/Rx';

//Services
import { PetsDataAccess } from './pets.data.service';
import { PetsTransform } from './pets.transform.service';

// Models
import { Pet } from './../_models/pet.model';


@Injectable()
export class PetsRepository {
    constructor(
        @Inject(PetsDataAccess) public _dataAccess: PetsDataAccess,
        @Inject(PetsTransform) private _transform: PetsTransform
    ) { }

    getAllPets() {
        let allPets = this._dataAccess.getAllPets()
            .map(data => this._transform.createPets(data[0]))
        return allPets;
    }

    getSinglePet(id: string) {
        let fetchedPet = this._dataAccess.getSinglePet(id)
            .map(data => this._transform.createPet(data))
            return fetchedPet;
    }

    updatePet() {
        
    }

    deletePet(id: string) {
       this._dataAccess.deletePet(id)
        .subscribe(data => data);
    }
}