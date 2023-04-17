import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
interface User {
    name: string,
    password: string
}
@Injectable()
export class AuthService {
    constructor(private http: HttpClient, private router: Router) { }
    loggedIn: boolean = false;


    //to get the token from the database into localstorage
    adminLogin(data: User):void {
        this.http.post("http://localhost:5000", data).subscribe((result: any) => {
            localStorage.setItem("token", result.token);
            this.router.navigate(['']);
            this.loggedIn = true;
        })
    }
    //getting the data from the database and setting the Authorisation in req header as token value
    adminProfileLogin() {
        let headers = new HttpHeaders()
            .set("Authorization", `bearer ${localStorage.getItem("token")}`)
        this.http.post("http://localhost:5000/profile", {}, { headers }).subscribe((result: any) => {
            console.log(result)
            return result;
        })
    }

    isAuthenticated(): boolean {
        return this.loggedIn;
    }
}

