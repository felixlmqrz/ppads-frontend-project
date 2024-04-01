export class User {
    id: string;
    name: string;
    password: string;
    email: string;
    gender: string;
    birthDate: string;
    address: string;
    phoneNumber: string;
    role: string;

    constructor(id: string, name: string, password: string, email: string, gender: string, birthDate: string, address: string, phoneNumber: string, role: string) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.birthDate = birthDate;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.role = role;
    }
}