import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Pet } from './../../models/pet.model';
import 'rxjs/Rx';


@Injectable()
export class PetsDataAccess {
    constructor(private http: Http) { }

    private _host: string = "http://localhost:4300";

    getAllPets() {
        return this.http.get(this._host + '/api/pets')
            .map((res: Response) => res.json());
    }

    getSinglePet(id: string) {
        return this.http.get(this._host + '/api/pets/' + id)
            .map((res: Response) => res.json());
    }

}