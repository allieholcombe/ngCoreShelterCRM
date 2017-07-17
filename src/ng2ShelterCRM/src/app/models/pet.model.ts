export class Pet {
    public id: string;
    public name: string;
    constructor(public databaseObject: any) {
        this.id = databaseObject.id;
        this.name = databaseObject.name;
    }
}