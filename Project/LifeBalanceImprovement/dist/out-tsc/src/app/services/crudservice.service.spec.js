import { TestBed } from '@angular/core/testing';
import { CRUDServiceService } from './crudservice.service';
describe('CRUDServiceService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(CRUDServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=crudservice.service.spec.js.map