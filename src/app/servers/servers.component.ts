import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  serverName = 'New Server';
  userName = '';
  userNameInfo = 'Please enter your username';
  servers = ['Testserver', 'Fleuriserver'];
  detailButtonClickCount = 0;
  showDetails = false;
  timeStamps = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
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

  onDetailButtonClick() {
    if (this.showDetails) {
      this.showDetails = false;
      } else {
      this.showDetails = true;
    }
    var d = new Date();
    var n = d.toString();
    this.timeStamps.push(n);
    }

    getFifthColour(i) {
      if (i >= 4) {
        return 'blue';
      }
    }
}
