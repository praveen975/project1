import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to',
  template: '<h2>{{fromdata}}</h2><button (click)="fireevent()">login</button>',
  styleUrls: ['./to.component.css']
})
export class ToComponent implements OnInit {
@Input() public fromdata;
@Output() public toevent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
fireevent(){

  this.toevent.emit("dirty fellow");
}
}
