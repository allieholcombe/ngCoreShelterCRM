import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Pet } from './../../models/pet.model';


@Injectable()
export class PetDataAccess {
    constructor(private http: Http) { }

    getAllPets() {
        return this.http.get('/api/pets')
            .subscribe(data => console.log(data));
    }

    getSinglePet(id: string) {
        return this.http.get('/api/pets/' + id)
            .subscribe(data => console.log(data));
    }

}