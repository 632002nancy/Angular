export class AuthService{
    logedIn:boolean=false;

    login(){
        this.logedIn=true;
    }

    logout(){
        this.logedIn=false;
    }

    isAuthenticated(){
        return this.logedIn;
    }
}