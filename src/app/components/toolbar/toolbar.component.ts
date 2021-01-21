import {Component, Input} from '@angular/core';

/**
 * @title This is the components description ``
 */
@Component({
  selector: 'toolbar',
  styleUrls: ['toolbar.component.css'],
  templateUrl: 'toolbar.component.html',
})

export class Toolbar {
  @Input() title: String;
}