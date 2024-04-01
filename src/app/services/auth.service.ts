import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

export interface AuthResponseData {
    id: string,
    name: string,
    email: string,
    password: string,
    token: string
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient) { }

    signup(id: string, name: string, password: string, email: string, gender: string, birthDate: string, address: string, phoneNumber: string, role: string) {
        return this.http.post<User>('http://localhost:8080/users/register',
            {
                id: id,
                name: name,
                password: password,
                email: email,
                gender: gender,
                birthDate: birthDate,
                address: address,
                phoneNumber: phoneNumber,
                role: role
            }
        );
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('http://localhost:8080/users/login',
            {
                email: email,
                password: password
            }
        );
    }
}