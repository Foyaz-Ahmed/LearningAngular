import { Component, OnInit } from '@angular/core';

@Component({
  //behvae as Selector
  selector: 'app-server',
  //behave as Attribute Selector
  // selector: '[app-server]',
  //behave as Class
  // selector: '.app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css']
  styles: [`
    .online{
      color: white;
    }
    
  `]
})
export class ServerComponent implements OnInit {

    serverId = 10;
    serverStatus = "Online";
  //another way to give value
  // serverId: number = 10;
  // serverStaus: string = "Online"
   buttonDisabled = false;
   serverCreatedStatus = "Server is not created";
   serverName = "";
   serverCreated = false;
  constructor() { 

    this.serverStatus = Math.random() > 0.5 ? 'Online': 'Offline';
    setTimeout(()=>{
      return this.buttonDisabled = true;
    },2000)
  }

  getServerId(){
    return this.serverId;
  }

  ngOnInit(): void {
  }
  onCreatedServer(){
    this.serverCreated = true;
    return this.serverCreatedStatus = 'Server is successfully Created' + "Name is:" +  this.serverName;
  }
  onServerNameUpdated(event: Event){
     return this.serverName = (<HTMLInputElement>event.target).value;
  }
  getColor(){
    return this.serverStatus === 'Online'? 'green': 'red';
  }
}
