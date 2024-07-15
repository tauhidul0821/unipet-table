import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-my-button',
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {
  @Input() firstName?: string;

}
