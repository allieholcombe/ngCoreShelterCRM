export class Pet {
    public id?: string;
    public name?: string;
    public sex?: string;

    constructor(obj: Pet = {} as Pet) {
        let {
            id = null,
            name = "",
            sex = ""
        } = obj;

        this.id = obj.id;
        this.name = obj.name;
        this.sex = obj.sex;
    }
}