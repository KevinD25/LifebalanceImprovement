export class User {
    constructor(id, email, _token, tokenExpirationDate) {
        this.id = id;
        this.email = email;
        this._token = _token;
        this.tokenExpirationDate = tokenExpirationDate;
    }
    get token() {
        if (!this.tokenExpirationDate || this.tokenExpirationDate <= new Date()) {
            return null;
        }
        return this._token;
    }
}
//# sourceMappingURL=user.model.js.map