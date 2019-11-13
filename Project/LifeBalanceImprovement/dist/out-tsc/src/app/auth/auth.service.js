import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, from } from 'rxjs';
import { User } from './user.model';
import { map, tap } from 'rxjs/operators';
import { Plugins } from '@capacitor/core';
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this._user = new BehaviorSubject(null);
    }
    get userIsAuthenticated() {
        return this._user.asObservable().pipe(map(user => {
            if (user) {
                return !!user.token;
            }
            else {
                return false;
            }
        }));
    }
    get userId() {
        return this._user.asObservable().pipe(map(user => {
            if (user) {
                return user.id;
            }
            else {
                return null;
            }
        }));
    }
    login(email, password) {
        return this.http
            .post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${environment.firebase.apiKey}`, { email: email, password: password, returnSecureToken: true })
            .pipe(tap(this.setUserData.bind(this)));
    }
    autoLogin() {
        return from(Plugins.Storage.get({ key: 'authData' })).pipe(map(storedData => {
            if (!storedData || !storedData.value) {
                return null;
            }
            const parsedData = JSON.parse(storedData.value);
            const expirationTime = new Date(parsedData.tokenExpirationDate);
            if (expirationTime <= new Date()) {
                return null;
            }
            const user = new User(parsedData.userId, parsedData.email, parsedData.token, expirationTime);
            return user;
        }), tap(user => {
            if (user) {
                this._user.next(user);
            }
        }), map(user => {
            return !!user; //boolean
        }));
    }
    storeAuthData(userId, token, tokenExpirationDate, email) {
        const data = JSON.stringify({ userId: userId, token: token, tokenExpirationDate: tokenExpirationDate, email: email });
        Plugins.Storage.set({ key: 'authData', value: data });
    }
    logout() {
        this._user.next(null);
    }
    signup(email, password) {
        return this.http
            .post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${environment.firebase.apiKey}`, { email: email, password: password, returnSecureToken: true })
            .pipe(tap(this.setUserData.bind(this)));
    }
    setUserData(userData) {
        const expirationTime = new Date(new Date().getTime() + +userData.expiresIn * 1000);
        this._user.next(new User(userData.localId, userData.email, userData.idToken, expirationTime));
        this.storeAuthData(userData.localId, userData.idToken, expirationTime.toISOString(), userData.email);
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map