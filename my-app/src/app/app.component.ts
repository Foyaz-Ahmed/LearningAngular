import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I am From App Component';
  serverElements = [{type: 'server', name: 'Test Server', content:'Just a Test'}];


  onServerAdded(serverData:{serverName:string, serverContent:string})
  {
   console.log('Hello');
  // onServerAdded(serverData:Event) {

     this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });

  }

  onBluePrintAdded(bluePrintData:{serverName:string, serverContent:string}) {
    
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }
}
