import { Injectable, Inject } from '@angular/core';

// Models
import { Pet } from './../../models/pet.model';


@Injectable()
export class PetsTransform {
    constructor() { }

    transformAllPets(data: any) {
        debugger;
        data = JSON.parse(data);
        if (Array.isArray(data)) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].hasOwnProperty("Key")) {
                    data[i].id = data[i].Key;
                    delete data[i].Key;
                }
                data[i] = new Pet(data[i]);
            }
        }
        return data;
    }

    getSinglePet(id: string) {

    }

}