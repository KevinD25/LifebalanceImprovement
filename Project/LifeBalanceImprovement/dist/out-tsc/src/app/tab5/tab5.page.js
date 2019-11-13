import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
let Tab5Page = class Tab5Page {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.Profileitems =
            {
                ImgUrl: "URL", Name: "Test", Age: 420, Gender: 'Test'
            };
    }
    onLogout() {
        this.authService.logout();
        this.router.navigateByUrl('/auth');
    }
    goToExterneHulp() {
        this.router.navigateByUrl('/externe-hulp');
    }
};
Tab5Page = tslib_1.__decorate([
    Component({
        selector: 'app-tab5',
        templateUrl: 'tab5.page.html',
        styleUrls: ['tab5.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService,
        Router])
], Tab5Page);
export { Tab5Page };
//# sourceMappingURL=tab5.page.js.map