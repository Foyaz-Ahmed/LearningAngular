import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I am From App Component';
  serverElements = [{type: 'server', name: 'Test Server', content:'Just a Test'}];
}
