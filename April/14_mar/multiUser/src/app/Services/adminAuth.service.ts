import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
interface User {
    name: string,
    password: string
}
@Injectable()
export class AuthService {
    constructor(private http: HttpClient, private router: Router) { }
    loggedIn: boolean = false;
    adminName = "admin";
    adminPass = "1234";

    adminLogin(data: User): boolean {
        // this.http.post("http://localhost:5000", data).subscribe((result: any) => {
        //     localStorage.setItem("token", result.token);
        // })
        if (this.adminName === data.name && this.adminPass === data.password) {
            this.loggedIn = true;
            return true;
        }
        else {
            return false;
        }
    }
    // //getting the data from the database and setting the Authorisation in req header as token value
    // adminProfileLogin() {
    //     let headers = new HttpHeaders()
    //         .set("Authorization", `bearer ${localStorage.getItem("token")}`)
    //     this.http.post("http://localhost:5000/profile", {}, { headers }).subscribe((result: any) => {
    //         console.log(result)
    //         return result;
    //     })
    // }
    adminLogOut(): void {
        this.loggedIn = false;
    }

    isAuthenticated(): boolean {
        return this.loggedIn;
    }
}

