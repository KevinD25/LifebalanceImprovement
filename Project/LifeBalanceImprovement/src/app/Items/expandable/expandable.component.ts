import { Component, OnInit } from '@angular/core';
import { AfterViewInit, Input, ViewChild,  ElementRef, Renderer2 } from "@angular/core";

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent implements AfterViewInit {
  @ViewChild('expandWrapper', { read: ElementRef, static: true }) expandWrapper: ElementRef;
  // tslint:disable-next-line: no-input-rename
  @Input('expanded') expanded = false;
  // tslint:disable-next-line: no-input-rename
  @Input('expandHeight') expandHeight = '320px';

  constructor(public renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.setStyle(this.expandWrapper.nativeElement, 'max-height', this.expandHeight);
  }
}
