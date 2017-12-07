///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverID: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return 'offline.';
  }

}

