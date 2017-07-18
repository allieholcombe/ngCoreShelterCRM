import { Injectable, Inject } from '@angular/core';

// Models
import { Pet } from './../../models/pet.model';


@Injectable()
export class PetsTransform {
    constructor() { }

    transformAllPets(data: any) {
        data = JSON.parse(data);
        if (Array.isArray(data)) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].hasOwnProperty("key")) {
                    data[i].id = data[i].key;
                    delete data[i].key;
                }
                data[i] = new Pet(data[i]);
            }
        }
        return data;
    }

    getSinglePet(id: string) {

    }

}