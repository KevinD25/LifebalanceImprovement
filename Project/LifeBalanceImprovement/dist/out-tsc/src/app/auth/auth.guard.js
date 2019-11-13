import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from './auth.service';
import { take, tap, switchMap } from 'rxjs/operators';
let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canLoad(route, segments) {
        return this.authService.userIsAuthenticated
            .pipe(take(1), switchMap(isAuthenticated => {
            if (!isAuthenticated) {
                return this.authService.autoLogin();
            }
            else {
                return of(isAuthenticated);
            }
        }), tap(isAuthenticated => {
            if (!isAuthenticated) {
                this.router.navigateByUrl('/auth');
            }
        }));
    }
};
AuthGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService, Router])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map