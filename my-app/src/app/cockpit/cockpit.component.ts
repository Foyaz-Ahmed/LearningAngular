import { Component, EventEmitter, OnInit, Output,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName = '';
  newServerContent = '';
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  constructor() { }

  ngOnInit(): void {
  }
 
  onAddServer(inputName:HTMLInputElement) {
    this.serverCreated.emit({
      // serverName:this.newServerName,
      serverName:inputName.value,
      serverContent:this.newServerContent
    });
  }

  onAddBlueprint(inputName:HTMLInputElement) {
    this.blueprintCreated.emit({
      //serverName:this.newServerName,
      serverName:inputName.value,
      serverContent:this.newServerContent
    });
  }
}
