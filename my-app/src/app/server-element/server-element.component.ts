import { Component, Input, OnInit,InputDecorator } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
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
