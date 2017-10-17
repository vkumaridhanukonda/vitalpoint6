import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    private isUserLoggedIn;
    public userName;
    constructor() {
        this.isUserLoggedIn = false;
        this.userName="admin";
    }
    serUserLoggedIn(){
        this.isUserLoggedIn=true;
    }
    getuserLoggedIn()
    {
        return  this.isUserLoggedIn
    }
}