export class User {
    public id?: string;
    public firstName?: string;
    public lastName?: string;
    public email: string;

    constructor(obj: User = {} as User) {
        let {
            id = null,
            firstName = "",
            lastName = "",
            email = ""
        } = obj;

        this.id = obj.id;
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.email = obj.email;
    }
}