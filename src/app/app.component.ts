import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `'<b>welcome to first angular app </b>
  <div style="text-align:center; font-size: 16px;">
    <b>
      welocome Mr/Mrs </b> {{firstName}}<br>
      <b>your location</b> {{location}}<br>
      <b>angular start date </b> {{startDate}}
  
  </div>
  <router-outlet></router-outlet>`,
  styles: [`b{color:red; font-size:25}`]
})
export class AppComponent {
  title = 'first angular website';
  firstName="Ravi k ";
  lastName="Kiran";
  location="chennai";
  startDate=new Date();

}
