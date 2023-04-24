import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  @Input()
  tag: any;

  constructor() {
    console.log('constructor', this.tag);
  }
  ngOnInit(): void {
    console.log('ngOnInit', this.tag);
  }
}
