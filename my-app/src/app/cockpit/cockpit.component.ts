import { Component, ElementRef, EventEmitter, OnInit, Output,ViewChild,ViewEncapsulation } from '@angular/core';

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
  @ViewChild('serverContentElement') serverContentElement?:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
 
  onAddServer(inputName:HTMLInputElement) {
    // this.serverCreated.emit({
    //   // serverName:this.newServerName,
    //   serverName:inputName.value,
    //   serverContent:this.newServerContent
    // });
    console.warn(this.serverContentElement?.nativeElement.value);
  }

  onAddBlueprint(inputName:HTMLInputElement) {
    this.blueprintCreated.emit({
      //serverName:this.newServerName,
      serverName:inputName.value,
      serverContent:this.newServerContent
    });
  }
}
