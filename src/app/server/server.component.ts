///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online {
    color: white;
  }`
  ]
})
export class ServerComponent {
  serverID: number = 10;
  serverStatus: string = '';

  constructor() {
  this.serverStatus = Math.random(10) > 0.5 ? 'offline' : 'online';
  }

  getColour() {
    if (this.serverStatus === 'offline') {
      return 'grey';
    } else {
      return 'limegreen';
    }
  }
}

