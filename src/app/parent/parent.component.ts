import { Component, Input ,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: ' <h2>{{"Hello"+parentdata}}</h2><button (click)="fireevent()">login</button>',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentMessage = "message from parent"

  @Input() public parentdata;
  @Output() public childevent= new EventEmitter();
  constructor() { }

  fireevent(){
    this.childevent.emit("hello");
  }
}
