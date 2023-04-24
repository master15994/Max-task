import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  @Input()
  counter = 0;

  @Output()
  counterChange = new EventEmitter<number>();

  @Input()
  tag: any;
  @Output()
  kick = new EventEmitter();
  constructor() {
    console.log('constructor', this.tag);
  }
  ngOnInit(): void {
    console.log('ngOnInit', this.tag);
  }
  @Output()
  onKick() {
    this.kick.emit(this.tag + 'piss off');
  }
}
