import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  serverName = 'New Server';
  userName = '';
  userNameInfo = 'Please enter your username';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    //this.serverCreationStatus = 'Server was created! Server name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = event.target.value;

  }

  /*onUpdateUserName(event: Event) {
  this.userName = event.target.value;
    this.updateUserNameInfo();

  } */

  updateUserNameInfo() {
    this.userNameInfo = 'Your username is ' + this.userName;
    this.userName = '';
  }

  stringEmpty() {
    return !(/\S/.test(this.userName));
  }
}
