import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Menu} from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() public menu: Menu[];
  @Output() selectEvent = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
sendEvent(item) {
    this.selectEvent.emit(item);
}
}
