import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks:any[]=[];
  user: any;
  title = 'final-year';

  setUser(user: any) {
    this.user = user;
 }
}
