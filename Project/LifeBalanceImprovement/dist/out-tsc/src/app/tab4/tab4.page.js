import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let Tab4Page = class Tab4Page {
    constructor() {
        this.items = [];
        this.items = [
            { expanded: false, Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula metus, viverra id nulla et, iaculis malesuada magna. Proin finibus venenatis neque dignissim volutpat. Aliquam ex justo, bibendum eget faucibus non, accumsan eget leo. Maecenas mattis ante nec tincidunt accumsan. Vestibulum aliquam pretium sagittis. Ut feugiat vulputate fringilla. Sed aliquam est quis tortor bibendum, ornare tempor sapien gravida. Aenean laoreet mauris vel dignissim maximus. Vivamus hendrerit quam id ex auctor pretium. Nulla aliquet magna ac magna bibendum ornare. Donec hendrerit tellus sit amet est interdum mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula metus, viverra id nulla et, iaculis malesuada magna. Proin finibus venenatis neque dignissim volutpat. Aliquam ex justo, bibendum eget faucibus non, accumsan eget leo. Maecenas mattis ante nec tincidunt accumsan. Vestibulum aliquam pretium sagittis. Ut feugiat vulputate fringilla. Sed aliquam est quis tortor bibendum, ornare tempor sapien gravida. Aenean laoreet mauris vel dignissim maximus. Vivamus hendrerit quam id ex auctor pretium. Nulla aliquet magna ac magna bibendum ornare. Donec hendrerit tellus sit amet est interdum mattis.  ", Title: "Happiness Exercises", index: 0, PageUrl: '/happy-exer' },
            { expanded: false, Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula metus, viverra id nulla et, iaculis malesuada magna. Proin finibus venenatis neque dignissim volutpat. Aliquam ex justo, bibendum eget faucibus non, accumsan eget leo. Maecenas mattis ante nec tincidunt accumsan. Vestibulum aliquam pretium sagittis. Ut feugiat vulputate fringilla. Sed aliquam est quis tortor bibendum, ornare tempor sapien gravida. Aenean laoreet mauris vel dignissim maximus. Vivamus hendrerit quam id ex auctor pretium. Nulla aliquet magna ac magna bibendum ornare. Donec hendrerit tellus sit amet est interdum mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula metus, viverra id nulla et, iaculis malesuada magna. Proin finibus venenatis neque dignissim volutpat. Aliquam ex justo, bibendum eget faucibus non, accumsan eget leo. Maecenas mattis ante nec tincidunt accumsan. Vestibulum aliquam pretium sagittis. Ut feugiat vulputate fringilla. Sed aliquam est quis tortor bibendum, ornare tempor sapien gravida. Aenean laoreet mauris vel dignissim maximus. Vivamus hendrerit quam id ex auctor pretium. Nulla aliquet magna ac magna bibendum ornare. Donec hendrerit tellus sit amet est interdum mattis.  ", Title: "Mindfull Exercises ", index: 1, PageUrl: '/mindfull-exer' },
            { expanded: false, Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula metus, viverra id nulla et, iaculis malesuada magna. Proin finibus venenatis neque dignissim volutpat. Aliquam ex justo, bibendum eget faucibus non, accumsan eget leo. Maecenas mattis ante nec tincidunt accumsan. Vestibulum aliquam pretium sagittis. Ut feugiat vulputate fringilla. Sed aliquam est quis tortor bibendum, ornare tempor sapien gravida. Aenean laoreet mauris vel dignissim maximus. Vivamus hendrerit quam id ex auctor pretium. Nulla aliquet magna ac magna bibendum ornare. Donec hendrerit tellus sit amet est interdum mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula metus, viverra id nulla et, iaculis malesuada magna. Proin finibus venenatis neque dignissim volutpat. Aliquam ex justo, bibendum eget faucibus non, accumsan eget leo. Maecenas mattis ante nec tincidunt accumsan. Vestibulum aliquam pretium sagittis. Ut feugiat vulputate fringilla. Sed aliquam est quis tortor bibendum, ornare tempor sapien gravida. Aenean laoreet mauris vel dignissim maximus. Vivamus hendrerit quam id ex auctor pretium. Nulla aliquet magna ac magna bibendum ornare. Donec hendrerit tellus sit amet est interdum mattis. ", Title: "Psycho Educatie", index: 2, PageUrl: '/psycho-edu' }
        ];
    }
    expandItem(item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.items.map(listItem => {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    }
    pressButton(item) {
        console.log(item.index);
    }
};
Tab4Page = tslib_1.__decorate([
    Component({
        selector: 'app-tab4',
        templateUrl: 'tab4.page.html',
        styleUrls: ['tab4.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], Tab4Page);
export { Tab4Page };
//# sourceMappingURL=tab4.page.js.map