import { Injectable } from '@angular/core';
import { IItem } from '../models/item';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    isLoggedIn: boolean = false;
    loginModal: boolean = false;
    isAdmin: boolean = false;

    constructor(private _router: Router){

    }

    openModal() {
        this.loginModal = true;
    }
    closeModal() {
        this.loginModal = false;
    }

    login(user) {
        if (user.username == "admin" && user.password == "admin") {
            this.isLoggedIn = true;
            localStorage.setItem("currentUser", JSON.stringify(user));
            this.isAdmin = true;
            this._router.navigate(['items']);
            return true;
        } else if (user.username === "client" && user.password === "client") {
            this.isLoggedIn = true;
            localStorage.setItem("currentUser", JSON.stringify(user));
            this.isAdmin = false;
            this._router.navigate(['client'])
            return true;
        } else {
            this.isLoggedIn = false;
            return false;
        }
    }
    logout() {
        this.isLoggedIn = false;
        localStorage.clear();
    }
}