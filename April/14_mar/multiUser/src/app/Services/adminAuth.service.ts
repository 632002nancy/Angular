export class AuthService{
    loggedIn:boolean=false;

    adminLogin():void{
        this.loggedIn=true;
    }

    userLogin():void{
        this.loggedIn=false;
    }

    isAuthenticated():boolean{
        return this.loggedIn;
    }
}