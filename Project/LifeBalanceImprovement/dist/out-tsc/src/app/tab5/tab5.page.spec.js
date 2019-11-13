import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Tab5Page } from './tab5.page';
describe('Tab2Page', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Tab5Page],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(Tab5Page);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tab5.page.spec.js.map