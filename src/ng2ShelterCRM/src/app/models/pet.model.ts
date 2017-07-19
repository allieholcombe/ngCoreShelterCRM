export class Pet {
    public id?: string;
    public name: string;

    constructor(obj: Pet = {} as Pet) {
        let {
            id = null,
            name = ""
        } = obj;

        this.id = obj.id;
        this.name = obj.name;
    }
}