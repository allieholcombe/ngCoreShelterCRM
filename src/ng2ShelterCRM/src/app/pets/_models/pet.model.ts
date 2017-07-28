export class Pet {
    public id?: string;
    public name?: string;
    public sex?: string;
    public image?: string;

    constructor(obj: Pet = {} as Pet) {
        let {
            id = null,
            name = "",
            sex = "",
            image = ""
        } = obj;

        this.id = obj.id;
        this.name = obj.name;
        this.sex = obj.sex;
        this.image = obj.image;
    }
}