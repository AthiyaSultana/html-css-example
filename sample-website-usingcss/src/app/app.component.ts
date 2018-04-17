import {Component} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {MatDialog} from '@angular/material';
import {RegisterComponent} from './register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private Dialog: MatDialog) {
  }

  openDialog() {
    const dialog = this.Dialog.open(LoginComponent, {
      height: '400px',
      width: '400px',
    });
  }

  openRegisterDialog() {
    const dialog = this.Dialog.open(RegisterComponent, {
      height: '500px',
      width: '400px',
    });
  }
}
