import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-child',
  template: 'say{{message}}',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() childMessage:string;
  constructor() { }

  ngOnInit() {
  }

}
