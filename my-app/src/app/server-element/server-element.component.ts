import { Component, Input, OnInit,InputDecorator, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // globally find csss for all components
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  @Input('renameElement') element= {
    type: '',
    name:'',
    content:'',
  };
  constructor(){}
  
  ngOnInit(): void {
  }

}
