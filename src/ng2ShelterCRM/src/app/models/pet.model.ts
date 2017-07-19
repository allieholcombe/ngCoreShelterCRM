export class Pet {
    public id: string;
    public name: string;

    constructor(databaseObject: any) {
        this.id = databaseObject.id;
        this.name = databaseObject.Name;
    }
}