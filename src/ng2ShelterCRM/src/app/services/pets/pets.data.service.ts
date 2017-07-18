import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Pet } from './../../models/pet.model';


@Injectable()
export class PetsDataAccess {
    constructor(private http: Http) {}

    host:string = "http://localhost:4300";

    getAllPets() {
        return this.http.get(this.host + '/api/pets')
            .subscribe(data => console.log(data));
    }

    getSinglePet(id: string) {
        return this.http.get('/api/pets/' + id)
            .subscribe(data => console.log(data));
    }

}