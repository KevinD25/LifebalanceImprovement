import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Input, ViewChild, ElementRef, Renderer2 } from "@angular/core";
let ExpandableComponent = class ExpandableComponent {
    constructor(renderer) {
        this.renderer = renderer;
        // tslint:disable-next-line: no-input-rename
        this.expanded = false;
        // tslint:disable-next-line: no-input-rename
        this.expandHeight = '191px';
    }
    ngAfterViewInit() {
        this.renderer.setStyle(this.expandWrapper.nativeElement, 'max-height', this.expandHeight);
    }
};
tslib_1.__decorate([
    ViewChild('expandWrapper', { read: ElementRef, static: true }),
    tslib_1.__metadata("design:type", ElementRef)
], ExpandableComponent.prototype, "expandWrapper", void 0);
tslib_1.__decorate([
    Input('expanded'),
    tslib_1.__metadata("design:type", Object)
], ExpandableComponent.prototype, "expanded", void 0);
tslib_1.__decorate([
    Input('expandHeight'),
    tslib_1.__metadata("design:type", Object)
], ExpandableComponent.prototype, "expandHeight", void 0);
ExpandableComponent = tslib_1.__decorate([
    Component({
        selector: 'app-expandable',
        templateUrl: './expandable.component.html',
        styleUrls: ['./expandable.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Renderer2])
], ExpandableComponent);
export { ExpandableComponent };
//# sourceMappingURL=expandable.component.js.map