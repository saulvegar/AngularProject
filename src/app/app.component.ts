import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'northwindweb';

  _displayLogin = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.authStatus.subscribe(authStatus => {
      const jwt = this.authService.getToken();
      setTimeout(() => (this._displayLogin = !(jwt === null || jwt === ''), 0));
    });
  }

  get displayMenu() {
    return this._displayLogin;
  }
}
