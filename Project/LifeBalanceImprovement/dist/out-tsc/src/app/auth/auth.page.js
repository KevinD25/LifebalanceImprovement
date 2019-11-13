import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from './auth.service';
let AuthPage = class AuthPage {
    constructor(authService, router, loadingCtrl, alertCtrl) {
        this.authService = authService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.isLoading = false;
        this.isLogin = true;
    }
    ngOnInit() {
    }
    authenticate(email, password) {
        this.isLoading = true;
        this.loadingCtrl
            .create({ keyboardClose: true, message: 'Logging in...' })
            .then(loadingEl => {
            loadingEl.present();
            let authObs;
            if (this.isLogin) {
                authObs = this.authService.login(email, password);
            }
            else {
                authObs = this.authService.signup(email, password);
            }
            authObs.subscribe(resData => {
                console.log(resData);
                this.isLoading = false;
                loadingEl.dismiss();
                console.log('NAVIGATING');
                this.router.navigateByUrl('/tabs');
            }, errRes => {
                loadingEl.dismiss();
                const code = errRes.error.error.message;
                let message = 'Could not sign you up, please try again.';
                if (code === 'EMAIL_EXISTS') {
                    message = 'This email address exists already!';
                }
                else if (code === 'EMAIL_NOT_FOUND') {
                    message = 'E-Mail address could not be found.';
                }
                else if (code === 'INVALID_PASSWORD') {
                    message = 'This password is not correct.';
                }
                this.showAlert(message);
            });
        });
    }
    onSubmit(form) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        this.authenticate(email, password);
        form.resetForm();
    }
    onSwitchAuthMode() {
        this.isLogin = !this.isLogin;
    }
    showAlert(message) {
        this.alertCtrl
            .create({
            header: 'Authentication failed',
            message: message,
            buttons: ['Okay']
        })
            .then(alertEl => alertEl.present());
    }
};
AuthPage = tslib_1.__decorate([
    Component({
        selector: 'app-auth',
        templateUrl: './auth.page.html',
        styleUrls: ['./auth.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService,
        Router,
        LoadingController,
        AlertController])
], AuthPage);
export { AuthPage };
//# sourceMappingURL=auth.page.js.map