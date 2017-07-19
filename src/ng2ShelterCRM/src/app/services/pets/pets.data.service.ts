import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Pet } from './../../models/pet.model';
import 'rxjs/Rx';


@Injectable()
export class PetsDataAccess {
    public headers: Headers;

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
     }

    private _host: string = "http://localhost:4300";

    getAllPets() {
        return this.http.get(this._host + '/api/pets')
            .map((res: Response) => res.json());
    }

    getSinglePet(id: string) {
        return this.http.get(this._host + '/api/pets/' + id)
            .map((res: Response) => res.json());
    }

    addPet(newPet: Pet) {
        console.log("post");
        return this.http.post(this._host + '/api/pets', newPet, {headers:this.headers});
            // .map((res: Response) => res.json());
    }
}