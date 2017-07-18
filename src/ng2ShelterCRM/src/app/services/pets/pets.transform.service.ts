import { Injectable, Inject } from '@angular/core';

// Models
import { Pet } from './../../models/pet.model';


@Injectable()
export class PetsTransform {
    constructor() { }

    transformKeyToId(data: any) {
        if (data.hasOwnProperty("Key")) {
            data.id = data.Key;
            delete data.Key;
        }
        return data;
    }

    createPet(data: any) {
        data = this.transformKeyToId(data);
        data = new Pet(data);
        return data;
    }

    createPets(data: any) {
        data = JSON.parse(data);
        if (Array.isArray(data)) {
            for (let i = 0; i < data.length; i++) {
                // data[i] = this.transformKeyToId(data[i]);
                // data[i] = new Pet(data[i]);
                data[i] = this.createPet(data[i]);
            }
        }
        return data;
    }
}