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
        if(data.hasOwnProperty("Name")) {
            data.name = data.Name;
            delete data.Name;
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
                data[i] = this.createPet(data[i]);
            }
        }
        return data;
    }

    formCreatePet(form: any) {
        console.log("Creating Pet");
        return form.get('name').value;
    }
}