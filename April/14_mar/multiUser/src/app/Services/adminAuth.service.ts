import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }
    loggedIn: boolean = false;

    adminLogin(): void {
        this.loggedIn = true;
    }

    userLogin(): void {
        this.loggedIn = false;
    }

    isAuthenticated(): boolean {
        return this.loggedIn;
    }
}

